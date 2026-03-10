export const DURATION = 0.35;

export const slideUp = (visible: boolean) =>
  visible ? "animate-slide-up opacity-0" : "opacity-0";

export const delay = (i: number) => ({
  animationDelay: `${DURATION + i * DURATION}s`,
});
