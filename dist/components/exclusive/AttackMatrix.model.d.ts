export declare namespace AttackMatrix {
    type Props = {
        items: AttackMatrixItem[];
        disabled: false;
        showDetected: true;
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
