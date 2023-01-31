import { ReactNode } from "react";

export interface CssConfig {
    className?: string;

    minHeight?: string;
    height?: string;

    marginRight?: string;
    marginLeft?: string;
    marginTop?: string;
    marginBottom?: string;
    margin?: string;

    elementsMargin?: string;
    columns?: number;

    alignItems?: string;

    listStyleType?: string;
    fontSize?: number;
    color?: string;

    children?: ReactNode
}
