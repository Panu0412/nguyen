import { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return ref;
}

export default useScrollAnimation;