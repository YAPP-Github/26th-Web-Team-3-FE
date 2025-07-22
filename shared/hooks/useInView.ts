import { useEffect, useRef, useState } from "react";

/**
 * useInView
 *
 * 특정 DOM 요소가 뷰포트에 보이는지 여부를 감지하는 커스텀 훅입니다.
 *
 * @param {number} - 요소가 뷰포트에 얼마나 보여야 isIntersecting이 true가 되는지 결정하는 값 (0~1)
 * @returns {{
 *   ref: React.RefObject<HTMLElement>;
 *   isIntersecting: boolean;
 * }} ref: 감지할 요소에 할당할 ref, isIntersecting: 뷰포트에 보이는지 여부
 *
 * @example
 * const { ref, isIntersecting } = useInView(0.5);
 *
 * return <div ref={ref}>{isIntersecting ? "보임" : "안 보임"}</div>;
 */
export const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold },
    );
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { ref, isIntersecting };
};
