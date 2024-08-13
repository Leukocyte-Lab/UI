/// <reference types="vite/client" />
import type { Application, ICanvas } from 'pvue3-pixi';

declare module '*.css' {}

declare global {
  interface Window {
    __PIXI_APP__: Application<ICanvas>;
  }
}
