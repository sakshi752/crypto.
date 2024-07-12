import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BiUpArrowAlt } from "react-icons/bi";

const BackToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.pageYOffset > 300);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <motion.button
            className={`w-10 h-10 p-3 shadow-md bg-gradient-to-r from-[#7a4191] to-[#1E3A8A] text-white rounded-full hover:from-[#6d3791] hover:to-[#162e6a] transition-colors fixed right-5 bottom-20 ${visible ? "block" : "hidden"}`}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 40 }}
            transition={{ duration: 0.4 }}
        >
            <BiUpArrowAlt />
        </motion.button>
    );
};

export default BackToTopBtn;
