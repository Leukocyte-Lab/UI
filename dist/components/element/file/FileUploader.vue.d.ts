import type { FileUploader } from '../../../components/element/file/FileUploader.model';
declare const _default: import("vue").DefineComponent<{
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    multiple: {
        type: import("vue").PropType<boolean | "directory">;
        default: boolean;
    };
    readAs: {
        type: import("vue").PropType<"text" | "formData" | "stream" | "base64" | "binary" | "buffer">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    upload: (payload: Map<string, ArrayBuffer | null>, files: FileUploader.UploadSignal[]) => void;
    success: (() => void) & ((filename: string) => void);
    error: (() => void) & ((filename: string) => void);
    abort: (() => void) & ((filename: string) => void);
    delete: (filenames: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    accept: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    multiple: {
        type: import("vue").PropType<boolean | "directory">;
        default: boolean;
    };
    readAs: {
        type: import("vue").PropType<"text" | "formData" | "stream" | "base64" | "binary" | "buffer">;
        default: string;
    };
}>> & {
    onError?: ((filename: string) => any) | undefined;
    onAbort?: ((filename: string) => any) | undefined;
    onUpload?: ((payload: Map<string, ArrayBuffer | null>, files: FileUploader.UploadSignal[]) => any) | undefined;
    onSuccess?: ((filename: string) => any) | undefined;
    onDelete?: ((filenames: string) => any) | undefined;
}, {
    required: boolean;
    icon: string;
    disabled: boolean;
    accept: string | string[];
    multiple: boolean | "directory";
    readAs: "text" | "formData" | "stream" | "base64" | "binary" | "buffer";
}, {}>;
export default _default;
