import { useEffect, useRef, useState } from "react";

/**
 * useInView
 *
 * 특정 DOM 요소가 뷰포트(Viewport)에 보이는지 여부를 감지하는 커스텀 훅입니다.
 * IntersectionObserver API를 사용합니다.
 *
 * @param {number} [threshold=0.2] - 요소가 뷰포트에 얼마나 보여야 isIntersecting이 true가 되는지 결정하는 값 (0~1)
 * @returns {{
 *   ref: React.RefObject<HTMLElement>;
 *   isIntersecting: boolean;
 * }} ref: 감지할 요소에 할당할 ref, isIntersecting: 뷰포트에 보이는지 여부
 *
 * @example
 * const { ref, isIntersecting } = useInView(0.5);
 *
 * // 이때 div는 뷰포트에 보이는지 여부를 감지할 요소입니다. 뷰포트 화면 전체 넓이로 설정해야 합니다.
 * return <div ref={ref}>{isIntersecting ? "보임" : "안 보임"}</div>;
 */
export const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isIntersecting };
};
