declare module "locomotive-scroll" {
  export default class LocomotiveScroll {
    constructor(options: { el: HTMLElement; smooth?: boolean });
    destroy(): void;
    update(): void;
  }
}
