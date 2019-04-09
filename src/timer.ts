import { clock } from './util';

/**
 * 定时器
 */
export class Timer {

  private cb: FrameRequestCallback;
  private delay: number;

  private raf: number;
  private prev: number = 0;

  /**
   * 回调函数，延迟，减少 fps，减低损耗
   * @param cb
   * @param delay
   */
  constructor(cb: FrameRequestCallback, delay: number = 60) {
    this.cb = cb;

    this.delay = delay;
  }

  /**
   * 启动
   */
  public start() {
    this.raf = window.requestAnimationFrame(() => {
      const n = clock.now();
      if (n > this.prev + this.delay) {
        this.prev = n;
        this.cb(0);
      }

      this.start();
    });
  }

  /**
   * 停止
   */
  public stop() {
    window.cancelAnimationFrame(this.raf);
    this.raf = undefined;
  }
}
