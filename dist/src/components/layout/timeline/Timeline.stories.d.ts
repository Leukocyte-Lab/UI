declare const meta: {
    title: string;
    component: import("vue").DefineSetupFnComponent<Record<string, any>, {}, {}, Record<string, any> & {}, import("vue").PublicProps>;
    tags: string[];
    argTypes: {
        events: {
            control: {
                type: string;
            };
            description: string;
        };
        follow: {
            control: {
                type: string;
            };
            description: string;
        };
        running: {
            control: {
                type: string;
            };
            description: string;
        };
        start: {
            control: {
                type: string;
            };
            description: string;
        };
        end: {
            control: {
                type: string;
            };
            description: string;
        };
        title: {
            control: {
                type: string;
            };
            description: string;
        };
        'onUpdate:range': {
            action: string;
            description: string;
        };
        'onUpdate:duration': {
            action: string;
            description: string;
        };
        'onUpdate:focused': {
            action: string;
            description: string;
        };
        'onUpdate:focused.array': {
            action: string;
            description: string;
        };
    };
};
export default meta;
export declare const Default: {
    args: {
        style: {
            width: string;
            height: string;
        };
        start: Date;
        end: Date;
        events: ({
            id: string;
            range: {
                start: Date;
                end: Date;
            };
        } | {
            id: string;
            range: {
                start: Date;
                end?: undefined;
            };
        })[];
    };
};
