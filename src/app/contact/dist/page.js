'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var cont_png_1 = require("/public/home/cont.png");
var hi_1 = require("react-icons/hi");
var ContactForm_1 = require("./ContactForm");
function Contact() {
    return (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
            delay: 0.2,
            scale: { type: 'spring', stiffness: 30 },
            opacity: { duration: 0.6 },
            ease: 'easeInOut'
        }, className: "bg-gradient-to-t from-black to-gray-800 font-serif min-h-screen flex items-center overflow-hidden" },
        react_1["default"].createElement("div", { className: "container px-6 py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: {
                        delay: 0.3,
                        scale: { type: 'spring', stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: 'easeInOut'
                    } },
                    react_1["default"].createElement(framer_motion_1.motion.p, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: {
                            delay: 0.4,
                            scale: { type: 'spring', stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: 'easeInOut'
                        }, className: "mt-4 px-6 mb-14 text-center text-5xl font-medium text-blue-400" }, "Contact Me"),
                    react_1["default"].createElement(framer_motion_1.motion.h1, { initial: { opacity: 0, y: 100 }, whileInView: { opacity: 1, y: 0 }, transition: {
                            delay: 0.5,
                            scale: { type: 'spring', stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: 'easeInOut'
                        }, className: "mt-2 font-serif font-bold text-gray-50 md:text-2xl" }, "GET IN TOUCH"),
                    react_1["default"].createElement(framer_motion_1.motion.p, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: {
                            delay: 0.6,
                            scale: { type: 'spring', stiffness: 30 },
                            opacity: { duration: 0.6 },
                            ease: 'easeInOut'
                        }, className: "mt-3  text-lg text-white" }, "Welcome! If you like my profile, feel free to reach out.")),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: {
                        delay: 0.7,
                        scale: { type: 'spring', stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: 'easeInOut'
                    }, className: "grid grid-cols-1 justify-center gap-5 mt-10 md:grid-cols-2 lg:grid-cols-2" },
                    react_1["default"].createElement("div", { className: "transition-transform transform hover:scale-105 flex items-center" },
                        react_1["default"].createElement(hi_1.HiOutlineMail, { size: 30, className: " text-white mr-3" }),
                        react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
                                delay: 0.2,
                                scale: { type: 'spring', stiffness: 30 },
                                opacity: { duration: 0.5 },
                                ease: 'easeInOut'
                            } },
                            react_1["default"].createElement(framer_motion_1.motion.h2, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
                                    delay: 0.2,
                                    scale: { type: 'spring', stiffness: 30 },
                                    opacity: { duration: 0.5 },
                                    ease: 'easeInOut'
                                }, className: "mt-4 text-2xl text-white font-semibold" }, "Email"),
                            react_1["default"].createElement(framer_motion_1.motion.p, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
                                    delay: 0.2,
                                    scale: { type: 'spring', stiffness: 30 },
                                    opacity: { duration: 0.5 },
                                    ease: 'easeInOut'
                                }, className: "mt-2 text-center text-blue-300" }, "snehalabnave.sae.comp@gmail.com")))),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: {
                        delay: 0.8,
                        scale: { type: 'spring', stiffness: 30 },
                        opacity: { duration: 0.6 },
                        ease: 'easeInOut'
                    }, className: "mt-10" },
                    react_1["default"].createElement(ContactForm_1["default"], null))),
            react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
                    delay: 0.8,
                    scale: { type: 'spring', stiffness: 30 },
                    opacity: { duration: 0.6 },
                    ease: 'easeInOut'
                }, className: "flex flex-col items-center justify-center" },
                react_1["default"].createElement(image_1["default"], { src: cont_png_1["default"], alt: "Contact Image", className: "rounded-lg shadow-lg mb-2" }),
                react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 }, transition: {
                        delay: 0.2,
                        scale: { type: 'spring', stiffness: 30 },
                        opacity: { duration: 0.5 },
                        ease: 'easeInOut'
                    }, className: "w-full h-64" },
                    react_1["default"].createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.243814990078!2d73.91220711470464!3d18.46931267502858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295f5e15793c7%3A0xb2d1f6893b7f1bc7!2sUndri%2C%20Pune%2C%20Maharashtra%20411028%2C%20India!5e0!3m2!1sen!2sin!4v1625248395105!5m2!1sen!2sin", width: "100%", height: "120%", loading: "lazy", className: "border", title: "Undri Pune Location" }))))));
}
exports["default"] = Contact;
