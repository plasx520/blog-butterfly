/**
 * 随机友链
 */
 hexo.extend.filter.register('after_render:html', function (data) {
    const flinks = []
    // 获取所有友链链接
    hexo.locals.get('data').link.map(function (list) {
        list.link_list.map(function (flink) {
            flinks.push(flink.link)
        })
    })
    // 随机获取一个友链
    data += `<script>var flinks=${JSON.stringify(flinks)};function toRandomFlink(){window.open(flinks[Math.floor(Math.random()*flinks.length)]);};</script>`
    return data
})
