import { FPS } from './fps';
import { Timer } from './timer';
import { Datum } from './interface';

const FONT_SIZE = 10; // 字体大小 10
const RATIO = window.devicePixelRatio;

export class PF {

  public static ver = '__VERSION__';

  private fps: FPS;
  private timer: Timer;

  private c: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor() {
    this.fps = new FPS();
    this.timer = new Timer(() => {
      this.draw();
    });
  }

  /**
   * 启动
   */
  public start() {
    if (!this.c || !this.ctx) {
      this.createCanvas();
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

    this.c.parentNode.removeChild(this.c);
    this.c = undefined;
    this.ctx = undefined;
  }

  /**
   * 采集当前的一条数据数据
   */
  public collect(): Datum {
    const fps = this.fps.sample();

    return Object.assign({},{ fps });
  }

  private createCanvas() {
    this.c = document.createElement('canvas');
    const w = 80;
    const h = 12;
    this.c.setAttribute(
      'style',
      `position: fixed; bottom: 4px; left: 4px; width: ${w}px; height: ${h}px`,
    );
    this.c.width = w * RATIO;
    this.c.height = h * RATIO;

    document.body.appendChild(this.c);

    this.ctx = this.c.getContext('2d');

    // ctx 样式
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = 'black';

    this.ctx.font = `${FONT_SIZE * RATIO}px Menlo`;
    this.ctx.textBaseline = 'middle';
  }

  private getDrawTexts(datum: Datum): string[] {
    return datum ? [
      `FPS: ${datum.fps.toFixed(3)}`,
    ] : [ '' ];
  }

  // 绘制图形
  private draw() {
    // 采集一次数据
    const datum = this.collect();

    const texts = this.getDrawTexts(datum);

    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    this.ctx.fillText(texts[0], 2, (6 + 1) * RATIO);
  }
}
