export declare const cssVariables: (initializer: () => Promise<any>, additionalStyles?: Record<string, string>) => {
    styleTag: Element | null;
    innerStyles: string;
    use: () => Promise<void>;
    unuse: () => Promise<void>;
};
export type CssVariables = ReturnType<typeof cssVariables>;
