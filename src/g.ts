const RATIO = window.devicePixelRatio;

const FONT_SIZE = 10; // 字体大小 10

// 画布大小
const W = 80;
const H = 12;

// 缓存的 fps 数量
const MAX = 1;

/**
 * graphic for fps draw
 */
export class G {

  private c: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  /**
   * 当前的 fps 数组
   */
  private fps: number[] = [];

  constructor() {
    this.createCanvas();
  }

  private createCanvas() {
    this.c = document.createElement('canvas');
    this.c.setAttribute(
      'style',
      `position: fixed; bottom: 4px; left: 4px; width: ${W}px; height: ${H}px; z-index: 99999`,
    );
    this.c.width = W * RATIO;
    this.c.height = H * RATIO;

    document.body.appendChild(this.c);

    this.ctx = this.c.getContext('2d');

    // ctx 样式
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillStyle = 'black';

    this.ctx.font = `${FONT_SIZE * RATIO}px Menlo`;
    this.ctx.textBaseline = 'middle';
  }

  /**
   * 添加新的 fps 到数组中
   * @param fps
   */
  public append(fps: number) {
    // 数组超出，则移除第一个！
    if (this.fps.length >= MAX) {
      this.fps.shift();
    }

    this.fps.push(fps);
  }

  /**
   * 绘制当前 fps，目前绘制最后一个，后面改成绘制曲线
   */
  public draw() {
    this.ctx.clearRect(0, 0, this.c.width, this.c.height);

    // least fps
    const f = this.fps[this.fps.length - 1];

    this.ctx.fillText(`FPS: ${f.toFixed(3)}`, 2, (6 + 1) * RATIO);
  }

  /**
   * 销毁
   */
  public destroy() {
    this.c.parentNode.removeChild(this.c);
    this.c = undefined;
    this.ctx = undefined;
  }
}
