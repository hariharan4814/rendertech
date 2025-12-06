
import { motion } from 'framer-motion';

export const StarDoodle = ({ className = "", delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: delay
        }}
    >
        <path
            d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

export const SpiralDoodle = ({ className = "", delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
    >
        <path
            d="M12 12C12 12 12.5 10 14 10C15.5 10 16 12 16 12.5C16 15 13 16 11.5 16C8.5 16 7 13 8 10.5C9 8 13.5 6 16.5 8C20.5 10.5 18.5 16 15.5 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

export const ArrowDoodle = ({ className = "", delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
    >
        <path
            d="M4 12C4 12 10 8 14 8C18 8 20 12 20 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16 8L20 12L16 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

export const SparkleDoodle = ({ className = "", delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        <path
            d="M12 2V6M12 18V22M2 12H6M18 12H22M4.9 4.9L7.7 7.7M16.3 16.3L19.1 19.1M4.9 19.1L7.7 16.3M16.3 7.7L19.1 4.9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </motion.svg>
);

export const SquiggleDoodle = ({ className = "", delay = 0 }) => (
    <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
    >
        <path
            d="M2 12C4 8 8 8 10 12C12 16 16 16 18 12C20 8 24 8 26 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);
