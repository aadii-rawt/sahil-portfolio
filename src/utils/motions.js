// motions.ts
export const dropIn = (delay = 0, y = -24) => ({
    hidden: { opacity: 0, y },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, delay, ease: "easeOut" }
    }
});

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
    hidden: {},
    show: { transition: { staggerChildren, delayChildren } }
});
