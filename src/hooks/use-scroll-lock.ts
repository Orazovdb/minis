import { useLenis } from "lenis/react";
import { useEffect } from "react";

export const scrollStop = () => {
  const lenis = useLenis();
  useEffect(() => {
    lenis?.stop();

    return () => lenis?.start();
  }, []);
};
