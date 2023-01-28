'use strict'

const pug = require('pug')
const path = require('path')
const urlFor = require('hexo-util').url_for.bind(hexo)
const util = require('hexo-util')
hexo.extend.generator.register('comments', function (locals) {
  const config = hexo.config.envelope_comment || hexo.theme.config.envelope_comment

  if (!(config && config.enable)) return

  const data = {
    author: hexo.config.author,
    cover: config.custom_pic.cover ? urlFor(config.custom_pic.cover) : "https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/violet.jpg",
    line: config.custom_pic.line ? urlFor(config.custom_pic.line) : "https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/line.png",
    beforeimg: config.custom_pic.beforeimg ? urlFor(config.custom_pic.beforeimg) : "https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/before.png",
    afterimg: config.custom_pic.afterimg ? urlFor(config.custom_pic.afterimg) : "https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/after.png",
    message: config.message ?  config.message : ["有什么想问的？","有什么想说的？","有什么想吐槽的？","哪怕是有什么想吃的，都可以告诉我哦~"],
    bottom: config.bottom ? config.bottom : "自动书记人偶竭诚为您服务",
    height: config.height ? config.height : "1050px"
  }
  const content = pug.renderFile(path.join(__dirname, './lib/html.pug'), data)

  const pathPre = config.path || 'comments'

  let pageDate = {
    content: content
  }

  if (config.front_matter) {
    pageDate = Object.assign(pageDate, config.front_matter)
  }

  return {
    path: pathPre + '/index.html',
    data: pageDate,
    layout: ['page', 'post']
  }
})
