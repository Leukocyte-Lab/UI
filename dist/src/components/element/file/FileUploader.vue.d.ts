import type { FileUploader } from '../../../components/element/file/FileUploader.model';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<FileUploader.Props>, {
    accept: string;
    multiple: boolean;
    disabled: boolean;
    required: boolean;
    icon: string;
    readAs: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    upload: ((payload: FormData, file: FileUploader.UploadSignal) => void) & ((payload: FormData, files: FileUploader.UploadSignal[]) => void) & ((payload: ReadableStream<Uint8Array> | null, file: FileUploader.UploadSignal) => void) & ((payload: Map<string, ReadableStream<Uint8Array> | null>, files: FileUploader.UploadSignal[]) => void) & ((payload: string | null, file: FileUploader.UploadSignal) => void) & ((payload: Map<string, string | null>, files: FileUploader.UploadSignal[]) => void) & ((payload: ArrayBuffer | null, file: FileUploader.UploadSignal) => void) & ((payload: Map<string, ArrayBuffer | null>, files: FileUploader.UploadSignal[]) => void);
    success: (() => void) & ((filename: string) => void);
    error: (() => void) & ((filename: string) => void);
    abort: (() => void) & ((filename: string) => void);
    delete: (filenames: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<FileUploader.Props>, {
    accept: string;
    multiple: boolean;
    disabled: boolean;
    required: boolean;
    icon: string;
    readAs: string;
}>>> & {
    onError?: ((filename: string) => any) | undefined;
    onAbort?: ((filename: string) => any) | undefined;
    onDelete?: ((filenames: string) => any) | undefined;
    onUpload?: ((payload: Map<string, ArrayBuffer | null>, files: FileUploader.UploadSignal[]) => any) | undefined;
    onSuccess?: ((filename: string) => any) | undefined;
}, {
    required: boolean;
    icon: string;
    disabled: boolean;
    multiple: boolean | "directory";
    accept: string[] | string;
    readAs: "formData" | "stream" | "base64" | "binary" | "buffer" | "text";
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
