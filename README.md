# page-fps

> Inject fps indicator into your page.


[![npm](https://img.shields.io/npm/v/page-fps.svg)](https://www.npmjs.com/package/page-fps)
[![npm](https://img.shields.io/npm/dm/page-fps.svg)](https://www.npmjs.com/package/page-fps)
[![gzip](http://img.badgesize.io/https://unpkg.com/page-fps/dist/pf.min.js?compression=gzip)](https://unpkg.com/page-fps/dist/pf.min.js)



## Install

> npm i --save page-fps



## Usage


 - Code usage

```js
import PF from 'page-fps';

const pf = new PF();

// start
pf.start();

// stop
pf.stop();
```


 - Script usage

Just import `dist/entry.min.js` into your document with script tag.



## API


```ts
import PF from 'page-fps';
import { FPS, Timer } from 'page-fps'
```

 - `PF`: page fps indicator.

 - `FPS`: a fps collector.
 
```ts
import { FPS } from 'page-fps';

const fps = new FPS();

// 开始记录数据
fps.start();

// 计算当前 fps
const f = fps.sample();

// 停止记录数据
fps.stop();
```

 - `Timer`: a callback execute timer.

```ts
import { Timer } from 'page-fps';

const timer = new Timer(callback, 30);

// 每隔 30ms 执行一次 callback 方法
timer.start();

// 停止
timer.stop();
```



## License

MIT
