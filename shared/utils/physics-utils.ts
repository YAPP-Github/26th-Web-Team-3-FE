import Matter from "matter-js";
import type { Body } from "matter-js";
// makeWalls 함수
export function makeWalls(
  containerBounding: DOMRect,
  engine: Matter.Engine,
  wallOptions: {
    top?: boolean;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
  },
) {
  const Bodies = Matter.Bodies;
  const opts = { isStatic: true, friction: 2 };

  let bottom: Body | undefined;
  let top: Body | undefined;
  let wLeft: Body | undefined;
  let wRight: Body | undefined;

  if (wallOptions.bottom) {
    bottom = Bodies.rectangle(
      containerBounding.width / 2,
      containerBounding.height + containerBounding.height * 0.15,
      containerBounding.width + containerBounding.width,
      100,
      opts,
    );
    Matter.World.add(engine.world, bottom);
  }

  if (wallOptions.top) {
    top = Bodies.rectangle(
      containerBounding.width / 2,
      -50,
      containerBounding.width + 100,
      100,
      opts,
    );
    Matter.World.add(engine.world, top);
  }

  if (wallOptions.right) {
    wRight = Bodies.rectangle(
      containerBounding.width + 50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts,
    );
    Matter.World.add(engine.world, wRight);
  }

  if (wallOptions.left) {
    wLeft = Bodies.rectangle(
      -50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts,
    );
    Matter.World.add(engine.world, wLeft);
  }
}

// makeBodies 함수
export function makeBodies(
  container: HTMLElement,
  world: Matter.World,
  elements: HTMLCollection,
  frictionOpts: {
    friction: number;
    frictionAir: number;
  },
  densityOpts: {
    enable: boolean;
    density: number;
  },
): Matter.Composite {
  const containerBounding = container.getBoundingClientRect();
  const bodies: Matter.Body[] = [];

  // 각 요소를 개별적으로 생성하여 겹치지 않는 위치에 배치
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    const { width, height } = element.getBoundingClientRect();

    // 겹치지 않는 위치 찾기
    const position = findNonOverlappingPosition(
      bodies,
      width,
      height,
      containerBounding,
    );

    const body = Matter.Bodies.rectangle(
      position.x,
      position.y,
      width,
      height,
      {
        isStatic: false,
        density: densityOpts.enable ? densityOpts.density : 0,
        friction: frictionOpts.friction,
        frictionAir: frictionOpts.frictionAir,
        restitution: 0.8, // 탄성 증가로 겹침 방지
        collisionFilter: {
          group: 1,
        },
      },
    );

    bodies.push(body);
  }

  const stack = Matter.Composite.create({ bodies });
  Matter.World.add(world, stack);
  return stack;
}

// 겹치지 않는 위치를 찾는 헬퍼 함수
function findNonOverlappingPosition(
  existingBodies: Matter.Body[],
  width: number,
  height: number,
  containerBounding: DOMRect,
): { x: number; y: number } {
  const maxAttempts = 100;
  const padding = 10; // 요소 간 최소 간격

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const maxLeft = containerBounding.width - width;
    const maxTop = containerBounding.height - height;

    const x = Math.floor(Math.random() * maxLeft);
    const y = Math.floor(Math.random() * maxTop);

    // 기존 바디들과 겹치는지 확인
    let overlaps = false;
    for (const body of existingBodies) {
      const distance = Math.sqrt(
        (x - body.position.x) ** 2 + (y - body.position.y) ** 2,
      );
      const minDistance = (width + height) / 2 + padding;

      if (distance < minDistance) {
        overlaps = true;
        break;
      }
    }

    if (!overlaps) {
      return { x, y };
    }
  }

  // 최대 시도 횟수를 초과하면 랜덤 위치 반환
  const maxLeft = containerBounding.width - width;
  const maxTop = containerBounding.height - height;
  return {
    x: Math.floor(Math.random() * maxLeft),
    y: Math.floor(Math.random() * maxTop),
  };
}
