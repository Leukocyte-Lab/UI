/// <reference types="vite/client" />
import type { Application } from 'pixi.js';

declare module '*.css' {}

declare global {
  interface Window {
    __PIXI_APP__: Application;
  }
}
