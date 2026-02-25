"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function Aura() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            // Normalize beta (-180 to 180) and gamma (-90 to 90) for subtle movement
            const x = (event.beta || 0) / 10;
            const y = (event.gamma || 0) / 10;
            setRotation({ x, y });
        };

        if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
            window.addEventListener("deviceorientation", handleOrientation);
        }

        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
        };
    }, []);

    // Smooth springs for fluid motion
    const springX = useSpring(0, { stiffness: 50, damping: 20 });
    const springY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        springX.set(rotation.x);
        springY.set(rotation.y);
    }, [rotation, springX, springY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-black">
            {/* The Core Aura Blob */}
            <motion.div
                style={{
                    x: springY,
                    y: springX,
                    rotateX: springX,
                    rotateY: springY,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw]"
            >
                <div
                    className="w-full h-full rounded-full opacity-30 blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, rgba(20,184,166,0.6) 0%, rgba(3,7,18,1) 70%)"
                    }}
                />
            </motion.div>

            {/* Subtle Secondary Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-[#14b8a6] blur-[150px] mix-blend-screen"
            />
        </div>
    );
}
