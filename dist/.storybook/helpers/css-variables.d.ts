export declare const cssVariables: (initializer: () => Promise<any>) => {
    styleTag: Element | null;
    innerStyles: string;
    use: () => Promise<void>;
    unuse: () => Promise<void>;
};
