export namespace AttackMatrix {
  export type Props = {
    items: AttackMatrixItem[];
    disabled?: boolean;
    showDetected?: boolean;
  };

  export type AttackMatrixItem = {
    label: string;
    description: string;
    detected?: {
      count: number;
      total: number;
    };
  };
}
