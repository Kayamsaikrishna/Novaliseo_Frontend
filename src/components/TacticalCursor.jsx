import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TacticalCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            {/* Target Crosshair */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M16 0V8"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    animate={{ height: isPointer ? 12 : 8 }}
                />
                <motion.path
                    d="M16 32V24"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    animate={{ height: isPointer ? 12 : 8 }}
                />
                <motion.path
                    d="M0 16H8"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    animate={{ width: isPointer ? 12 : 8 }}
                />
                <motion.path
                    d="M32 16H24"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    animate={{ width: isPointer ? 12 : 8 }}
                />
                <motion.circle
                    cx="16" cy="16" r="14"
                    stroke="#3b82f6"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                    animate={{
                        rotate: 360,
                        scale: isPointer ? 1.2 : 1
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                {isPointer && (
                    <motion.circle
                        cx="16" cy="16" r="4"
                        fill="#3b82f6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                    />
                )}
            </svg>

            {/* Coordinates (Subtle Overlay) */}
            <motion.div
                className="absolute top-10 left-10 text-[8px] font-mono text-blue-500 whitespace-nowrap opacity-50"
                animate={{ opacity: isPointer ? 0.8 : 0.4 }}
            >
                <div className="flex flex-col">
                    <span>LAT: {(mouseX.get() * 0.1).toFixed(4)}</span>
                    <span>LNG: {(mouseY.get() * 0.1).toFixed(4)}</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TacticalCursor;
