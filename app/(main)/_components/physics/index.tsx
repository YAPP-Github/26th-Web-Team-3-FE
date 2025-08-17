"use client";
import { ControlType, addPropertyControls } from "framer";
import Matter from "matter-js";
import type React from "react";
import { useEffect, useRef, useState } from "react";

import { makeBodies, makeWalls } from "@/shared/utils/physics-utils";

interface PhysicsProps {
  children: React.ReactNode;
  gravX: number;
  gravY: number;
  wallOptions: { top: boolean; bottom: boolean; right: boolean; left: boolean };
  frictionOptions: { friction: number; frictionAir: number };
  mouseOptions: {
    enable: boolean;
    angularStiffness: number;
    stiffness: number;
  };
  densityOptions: { enable: boolean; density: number };
  sleeping: boolean;
  debug?: boolean;
}

/**
 * These annotations control how your component sizes
 *
 * @framerSupportedLayoutWidth any-prefer-fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 */

// Matter.Mouse에 이벤트 핸들러가 포함되어 있다고 가정하는 타입
interface ExtendedMouse extends Matter.Mouse {
  mousewheel: (event: WheelEvent) => void;
  mousedown: (event: MouseEvent | TouchEvent) => void;
  mousemove: (event: MouseEvent | TouchEvent) => void;
  mouseup: (event: MouseEvent | TouchEvent) => void;
}

export default function Physics(props: PhysicsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // 800px 기준으로 화면 크기 변경 감지
  useEffect(() => {
    const updateScreenSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newIsLargeScreen = rect.width >= 800;
        
        // 800px 기준으로 상태가 변경될 때만 업데이트
        if (newIsLargeScreen !== isLargeScreen) {
          setIsLargeScreen(newIsLargeScreen);
        }
      }
    };

    // 초기 크기 설정
    updateScreenSize();

    // resize 이벤트 리스너 추가
    window.addEventListener('resize', updateScreenSize);
    
    // ResizeObserver를 사용하여 더 정확한 크기 변경 감지
    const resizeObserver = new ResizeObserver(updateScreenSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateScreenSize);
      resizeObserver.disconnect();
    };
  }, [isLargeScreen]); // isLargeScreen을 의존성으로 추가

  // 물리 엔진 초기화 및 재설정 (800px 기준 변경 시에만)
  useEffect(() => {
    if (!containerRef.current) return;

    // 기존 엔진 정리
    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
      engineRef.current = null;
    }

    // 새 엔진 생성
    const engine = Matter.Engine.create({
      enableSleeping: props.sleeping,
      gravity: { y: props.gravY, x: props.gravX },
    });
    engineRef.current = engine;

    const containerBounding = containerRef.current.getBoundingClientRect();

    if (containerBounding) {
      makeWalls(containerBounding, engine, props.wallOptions);
    }

    if (props.debug) {
      const render = Matter.Render.create({
        element: containerRef.current,
        engine: engine,
        options: {
          height: containerBounding.height,
          width: containerBounding.width,
          showAngleIndicator: true,
          showVelocity: true,
        },
      });
      Matter.Render.run(render);
    }

    let mouseConstraint: Matter.MouseConstraint | null = null;
    if (props.mouseOptions.enable && containerRef.current) {
      const mouse = Matter.Mouse.create(containerRef.current);

      mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: props.mouseOptions.stiffness,
        },
      });
      Matter.Composite.add(engine.world, mouseConstraint);

      // Mouse 객체를 확장된 타입으로 캐스팅
      const extendedMouse = mouseConstraint.mouse as ExtendedMouse;

      // Remove the many event listeners preventing scroll/drag
      mouseConstraint.mouse.element.removeEventListener(
        "mousewheel",
        extendedMouse.mousewheel as EventListener,
      );
      mouseConstraint.mouse.element.removeEventListener(
        "DOMMouseScroll",
        extendedMouse.mousewheel as EventListener,
      );
      mouseConstraint.mouse.element.removeEventListener(
        "touchstart",
        extendedMouse.mousedown as EventListener,
      );
      mouseConstraint.mouse.element.removeEventListener(
        "touchmove",
        extendedMouse.mousemove as EventListener,
      );
      mouseConstraint.mouse.element.removeEventListener(
        "touchend",
        extendedMouse.mouseup as EventListener,
      );

      mouseConstraint.mouse.element.addEventListener(
        "touchstart",
        extendedMouse.mousedown as EventListener,
        { passive: true },
      );
      mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
        if (mouseConstraint?.body) {
          (extendedMouse.mousemove as EventListener)(e);
        }
      });
      mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
        if (mouseConstraint?.body) {
          (extendedMouse.mouseup as EventListener)(e);
        }
      });

      containerRef.current.addEventListener("mouseleave", () => {
        if (mouseConstraint) {
          (extendedMouse.mouseup as EventListener)(
            new Event("mouseup") as MouseEvent,
          );
        }
      });
    }

    if (containerRef.current) {
      const stack = makeBodies(
        containerRef.current,
        engine.world,
        containerRef.current.children,
        props.frictionOptions,
        props.densityOptions,
      );

      // Update function
      let rafId: number | null = null;
      const update = () => {
        rafId = requestAnimationFrame(update);

        stack.bodies.forEach((block, i) => {
          const el = containerRef.current?.children[i] as HTMLElement;
          if (el) {
            const { x, y } = block.position;
            el.style.visibility = "visible";
            el.style.top = `${y}px`;
            el.style.left = `${x}px`;
            el.style.transform = `
    translate(-50%, -50%)
    rotate(${block.angle}rad)
`;
          }
        });

        Matter.Engine.update(engine, 1000 / 60);
      };

      update();

      // cleanup on unmount
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        if (mouseConstraint) Matter.Composite.remove(engine.world, mouseConstraint);
        // 디버그 렌더가 존재했다면 정지 및 DOM 제거
        const renderCanvas = containerRef.current?.querySelector("canvas");
        if (renderCanvas) {
          try {
            // Render.stop은 render 인스턴스가 필요하지만, 간단하게 캔버스 제거만으로도 반복 렌더 방지
            renderCanvas.remove();
          } catch {}
        }
        Matter.World.clear(engine.world, false);
        Matter.Engine.clear(engine);
        engineRef.current = null;
      };
    }
  }, [
    isLargeScreen, // 800px 기준 변경 시에만 재실행
    props.sleeping,
    props.gravY,
    props.gravX,
    props.wallOptions,
    props.debug,
    props.mouseOptions,
    props.frictionOptions,
    props.densityOptions,
  ]);

  return (
    <div
      style={containerStyle as React.CSSProperties}
      ref={containerRef}
      draggable="false"
      onDragStart={(e) => {
        e.preventDefault();
      }}
    >
      {Array.isArray(props.children) && props.children.length > 0 ? (
        props.children.map((el, i) => {
          return (
            <div
              key={i}
              style={bodyStyle as React.CSSProperties}
              data-physics-body
              draggable="false"
            >
              {el}
            </div>
          );
        })
      ) : (
        <div
          style={bodyStyle as React.CSSProperties}
          data-physics-body
          draggable="false"
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

// Styles are written in object syntax
// Learn more: https://reactjs.org/docs/dom-elements.html#style
const containerStyle = {
  position: "relative",
  height: "100%",
  width: "100%",
  overflow: "hidden",
};
const bodyStyle = {
  position: "absolute",
  visibility: "hidden",
  pointerEvents: "auto", 
};

Physics.defaultProps = {
  gravX: 0,
  gravY: 1,
  children: {},
  wallOptions: { top: true, bottom: true, right: true, left: true },
  frictionOptions: { friction: 0.1, frictionAir: 0.01 },
  mouseOptions: {
    angularStiffness: 0,
    stiffness: 0.2,
    enable: true,
  },
  densityOptions: { enable: true, density: 0.001 },
  sleeping: false,
  debug: false,
};

addPropertyControls(Physics, {
  children: {
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
  },
  gravY: {
    type: ControlType.Number,
    defaultValue: 1,
    max: 5,
    min: -5,
    step: 0.25,
    title: "Gravity Y",
  },
  gravX: {
    type: ControlType.Number,
    defaultValue: 0,
    max: 5,
    min: -5,
    step: 0.25,
    title: "Gravity X",
  },
  wallOptions: {
    title: "Walls",
    type: ControlType.Object,
    controls: {
      top: { type: ControlType.Boolean, defaultValue: true },
      bottom: { type: ControlType.Boolean, defaultValue: true },

      right: { type: ControlType.Boolean, defaultValue: true },
      left: { type: ControlType.Boolean, defaultValue: true },
    },
  },

  mouseOptions: {
    title: "Mouse",
    type: ControlType.Object,
    controls: {
      enable: {
        title: "Enable",
        type: ControlType.Boolean,
        defaultValue: true,
      },
      angularStiffness: {
        title: "Angular stiffness",
        description:
          "A value of 0 allows objects to swing when held by the mouse",
        type: ControlType.Number,
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.01,
      },
      stiffness: {
        title: "Stiffness",
        description:
          "Click + drag creates a moving constraint (spring) that follows the mouse. This describes the stiffness of that spring",
        type: ControlType.Number,
        defaultValue: 0.2,
        min: 0.001,
        max: 1,
        step: 0.01,
      },
    },
  },
  frictionOptions: {
    type: ControlType.Object,
    controls: {
      friction: {
        title: "Body friction",
        type: ControlType.Number,
        min: 0,
        max: 1,
        defaultValue: 0.1,
        step: 0.01,
      },
      frictionAir: {
        title: "Air friction",
        type: ControlType.Number,
        min: 0,
        max: 1,
        defaultValue: 0.01,
        step: 0.01,
      },
    },
  },
  densityOptions: {
    title: "Density",
    type: ControlType.Object,
    controls: {
      enable: {
        type: ControlType.Boolean,
        defaultValue: true,
        description:
          "Enabling density will cause mass to be calculated based on width and height",
      },
      density: {
        type: ControlType.Number,
        defaultValue: 0.001,
        min: 0.001,
        max: 1,
        step: 0.01,
      },
    },
  },
  sleeping: {
    title: "Sleeping",
    description: "Improves performance at the cost of simulation accuracy",
    type: ControlType.Boolean,
    defaultValue: false,
  },
});
