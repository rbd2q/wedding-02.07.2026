"use client";

import { useEffect, useRef, useState } from "react";

export const useInView = <T extends Element = HTMLDivElement>(options?: {
  rootMargin?: string;
  threshold?: number;
}) => {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      {
        rootMargin: options?.rootMargin ?? "0px",
        threshold: options?.threshold ?? 1,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return { ref, isInView };
};
