import { useEffect, useState } from "react";

export const useToast = () => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), 2500); // 2.5초 후 사라짐
    return () => clearTimeout(timer);
  }, []);

  return { isExiting };
};
