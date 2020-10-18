import React from 'react';
import { ViewBox } from "recharts"

export type ReferenceLabelProps = {
    fill?: string;
    value?: string;
    textAnchor?: string;
    fontSize?: number;
    viewBox: ViewBox;
    dy?: number;
    dx?: number;
}

export function ReferenceLabel({ fill, value, textAnchor,
    fontSize, viewBox, dy, dx }: ReferenceLabelProps) {

    const x = viewBox.width ?? + (viewBox.x ?? + 0) + 20;
    const y = viewBox.y ?? - 6;

    return (
        <text
            x={x} y={y}
            dy={dy}
            dx={dx}
            fill={fill}
            fontSize={fontSize || 10}
            textAnchor={textAnchor}>
            {value}
        </text>
    )
}