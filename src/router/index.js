/*
 * @Author: Fan Li
 * @Date: 2022-03-15 22:10:05
 * @LastEditTime: 2022-03-30 14:15:21
 * @LastEditors: Fan Li
 * @Description: null
 * @FilePath: \Code\Koa2\note\src\router\index.js
 * @Help: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'

const Router = require('koa-router')
const Image = require('../controller/image')

module.exports = function () {
  var router = new Router({
    // prefix: '/api'
  })

  // image
  router.post('/note/img/upload', Image.upload)
  router.get('/note/img/show/:url', Image.show)
  router.get('/note/img/delete/:url', Image.delete)

  return router
}