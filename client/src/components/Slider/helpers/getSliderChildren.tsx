import React from "react";

export function getSliderChildren(children: React.ReactNode) {
    const slides = [];
    React.Children.toArray(children).forEach((child) => {
        slides.push(child)
    });
    return slides
}