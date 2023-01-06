import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn: any = (duration = 1, delay = 0) => {
  const element = useRef<HTMLElement>();

  const handleDirection = () => {
    return "translate3d(0, 50%, 0)";
  };

  const onScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      console.log("entry:: ", entry);
      const { current } = element;
      console.log("current:: ", current);
      if (entry.isIntersecting) {
        if (current) {
          current.style.transitionProperty = "all";
          current.style.transitionDuration = `${duration}s`;
          current.style.transitionTimingFunction = "linear";
          current.style.transitionDelay = `${delay}s`;
          current.style.opacity = "1";
          current.style.transform = "translate3d(0, 0, 0)";
        }
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection },
  };
};

export default useScrollFadeIn;
