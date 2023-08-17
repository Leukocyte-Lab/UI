export declare namespace AttackMatrix {
    type Props = {
        items: AttackMatrixItem[];
        disabled?: boolean;
        showDetected?: boolean;
    };
    type AttackMatrixItem = {
        label: string;
        description: string;
        detected?: {
            count: number;
            total: number;
        };
    };
}
