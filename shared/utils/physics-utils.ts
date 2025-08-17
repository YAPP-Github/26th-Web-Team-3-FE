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
      containerBounding.width + 100,
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

  const stack = Matter.Composites.stack(
    0,
    0,
    elements.length,
    1,
    0,
    0,
    (_xx: number, _yy: number, i: number) => {
      const element = elements[i] as HTMLElement;
      const { width, height } = element.getBoundingClientRect();
      const maxLeft = containerBounding.width - width;
      const maxTop = containerBounding.height - height;

      // Places the elements at random locations
      const tLeft = Math.floor(Math.random() * maxLeft);
      const tTop = Math.floor(Math.random() * maxTop);

      return Matter.Bodies.rectangle(tLeft, tTop, width, height, {
        isStatic: false,
        density: densityOpts.enable ? densityOpts.density : 0,
        friction: frictionOpts.friction,
        frictionAir: frictionOpts.frictionAir,
      });
    },
  );

  Matter.World.add(world, stack);
  return stack;
}
