function wblj(args) {
    args = args.join(' ').split(',');
    let title = args[0];
    let sitename = args[1];
    let wblj = args[2];

    // 获取网页favicon
    let urlNoProtocol = wblj.replace(/^https?\:\/\//i, "");
    let imgUrl = "https://api.iowen.cn/favicon/" + urlNoProtocol + ".png";

    return `<a class="tag-Link" target="_blank" href="${wblj}">
    <div class="tag-link-tips">引用站外地址，不保证站点的可用性和安全性</div>
    <div class="tag-link-bottom">
        <div class="tag-link-left" style="background-image: url(${imgUrl});"></div>
        <div class="tag-link-right">
            <div class="tag-link-title">${title}</div>
            <div class="tag-link-sitename">${sitename}</div>
        </div>
        <i class="fa-solid fa-angle-right"></i>
    </div>
    </a>`
}

hexo.extend.tag.register('wblj',wblj, { ends: false })
