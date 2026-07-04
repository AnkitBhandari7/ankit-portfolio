declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | string[] | Element | Element[], vars?: Record<string, unknown>);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: Record<string, unknown>): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(hard?: boolean): void;
    scrollTo(target: string | number | Element | null, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}
