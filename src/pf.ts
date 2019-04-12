import { FPS } from './fps';
import { Timer } from './timer';
import { G } from './g';

export class PF {

  public static ver = '__VERSION__';

  private fps: FPS;
  private timer: Timer;

  private g: G;

  constructor() {
    // fps 采样
    this.fps = new FPS();

    // 渲染的 raf
    this.timer = new Timer(() => {
      // 采样
      this.g.append(this.fps.sample());
      // 绘制
      this.g.draw();
    });
  }

  /**
   * 启动
   */
  public start() {
    if (!this.g) {
      this.g = new G();
    }

    this.fps.start();
    this.timer.start();
  }

  /**
   * 停止
   */
  public stop() {
    this.fps.stop();

    this.timer.stop();

    if (this.g) {
      this.g.destroy();
      this.g = void 0;
    }
  }
}
