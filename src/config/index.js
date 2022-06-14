/*
 * @Author: Fan Li
 * @Date: 2022-03-22 06:58:47
 * @LastEditTime: 2022-03-29 11:00:35
 * @LastEditors: Fan Li
 * @Description: null
 * @FilePath: \Code\Koa2\note\src\config\index.js
 * @Help: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const REDIS_CONFIG = {
  port: 6379,
  host: '127.0.0.1',
  password: 'foobared',
  db: 0,
  family: 4
};

module.exports = { REDIS_CONFIG }