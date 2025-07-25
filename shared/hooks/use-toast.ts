import { useEffect, useState } from "react";

export const useToast = () => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 3000);
    return () => {
      clearTimeout(exitTimer);
    };
  }, []);

  return { exiting };
};
