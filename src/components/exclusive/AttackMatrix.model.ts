export namespace AttackMatrix {
  export type Props = {
    items: AttackMatrixItem[];
    disabled: false;
    showDetected: true;
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
