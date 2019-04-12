/**
 * 获取当前时间
 */
export const clock = typeof performance === 'object' && performance.now ? performance : Date;
