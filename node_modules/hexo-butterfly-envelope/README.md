# hexo-butterfly-envelope

给`hexo-theme-butterfly`添加 [信封样式留言板](https://akilar.top/posts/e2d3c450/)

# 安装

1. 安装插件,在博客根目录`[Blogroot]`下打开终端，运行以下指令：
  ```bash
  npm install hexo-butterfly-envelope --save
  ```

2. 添加配置信息，以下为写法示例
  在站点配置文件`_config.yml`或者主题配置文件`_config.butterfly.yml`中添加

  ```yaml
    # envelope_comment
    # see https://akilar.top/posts/e2d3c450/
    envelope_comment:
      enable: true #控制开关
      custom_pic:      
        cover: https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/violet.jpg #信笺头部图片
        line: https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/line.png #信笺底部图片
        beforeimg: https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/before.png # 信封前半部分
        afterimg: https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/after.png # 信封后半部分
      message: #信笺正文，多行文本，写法如下
        - 有什么想问的？
        - 有什么想说的？
        - 有什么想吐槽的？
        - 哪怕是有什么想吃的，都可以告诉我哦~
      bottom: 自动书记人偶竭诚为您服务！ #仅支持单行文本
      height: #1050px，信封划出的高度
      path: #【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html
      front_matter: #【可选】comments页面的 front_matter 配置
        title: 留言板
        comments: true
  ```
3. 参数释义

  |参数|备选值/类型|释义|
  |:--|:--|:--|
  |enable|true/false|控制开关|
  |custom_pic.cover|URL|信笺头部图片链接|
  |custom_pic.line|URL|信笺底部图片链接|
  |custom_pic.beforeimg|URL|信封前半部分图片链接|
  |custom_pic.afterimg|URL|信封后半部分图片链接|
  |message|text|信笺正文，支持多行文本，写法见上文示例|
  |bottom|text|信笺底部信息，仅支持单行文本|
  |height|1050px|默认1050px，信封划出的高度|
  |path|comments|【可选】comments 的路径名称。默认为 comments，生成的页面为 comments/index.html|
  |front_matter|object|【可选】comments页面的 front_matter 配置,写法见上文示例|
# 截图
![](https://unpkg.zhimg.com/hexo-butterfly-envelope/lib/violet.jpg)
