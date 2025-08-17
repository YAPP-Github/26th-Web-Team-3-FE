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
  }
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
      containerBounding.height - 10,
      containerBounding.width + containerBounding.width,
      100,
      opts
    );
    Matter.World.add(engine.world, bottom);
  }

  if (wallOptions.top) {
    top = Bodies.rectangle(
      containerBounding.width / 2,
      -50,
      containerBounding.width + 100,
      100,
      opts
    );
    Matter.World.add(engine.world, top);
  }

  if (wallOptions.right) {
    wRight = Bodies.rectangle(
      containerBounding.width + 50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts
    );
    Matter.World.add(engine.world, wRight);
  }

  if (wallOptions.left) {
    wLeft = Bodies.rectangle(
      -50,
      containerBounding.height / 2,
      100,
      containerBounding.height,
      opts
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
  }
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
      containerBounding
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
        restitution: 0.8,
        collisionFilter: {
          group: 1,
        },
      }
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
  containerBounding: DOMRect
): { x: number; y: number } {
  const maxAttempts = 100;
  const padding = 10; // 요소 간 최소 간격

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const maxLeft = Math.max(0, containerBounding.width - width);
    const maxTop = Math.max(0, containerBounding.height - height);
    const left = Math.floor(Math.random() * (maxLeft + 1));
    const top = Math.floor(Math.random() * (maxTop + 1));
    // Matter.Body는 중심 좌표를 사용하므로 중심으로 변환
    const x = left + width / 2;
    const y = top + height / 2;

    // 기존 바디들과 AABB 겹침 검사
    const halfW = width / 2;
    const halfH = height / 2;
    const aLeft = x - halfW - padding;
    const aRight = x + halfW + padding;
    const aTop = y - halfH - padding;
    const aBottom = y + halfH + padding;

    let overlaps = false;
    for (const body of existingBodies) {
      const b = body.bounds;
      const intersects = !(
        aRight < b.min.x ||
        aLeft > b.max.x ||
        aBottom < b.min.y ||
        aTop > b.max.y
      );
      if (intersects) {
        overlaps = true;
        break;
      }
    }

    if (!overlaps) {
      return { x, y };
    }
  }

  // 최대 시도 횟수를 초과하면 랜덤 위치 반환
  const maxLeft = Math.max(0, containerBounding.width - width);
  const maxTop = Math.max(0, containerBounding.height - height);
  const left = Math.floor(Math.random() * (maxLeft + 1));
  const top = Math.floor(Math.random() * (maxTop + 1));
  return {
    x: left + width / 2,
    y: top + height / 2,
  };
}
