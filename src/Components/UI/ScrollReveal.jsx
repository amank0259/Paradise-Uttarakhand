import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    fromUp: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
    fromDown: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    fromLeft: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
    fromRight: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
};

const ScrollReveal = ({ children, variant = 'fromUp', delay = 0 }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <motion.div
            ref={ref}
            initial={variants[variant].initial}
            animate={inView ? variants[variant].animate : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay }}
            className="w-full h-full"       // Ensure full width and height
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
