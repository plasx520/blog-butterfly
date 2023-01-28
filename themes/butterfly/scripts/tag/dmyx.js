
  /**
{% htmldm %}
HTML代码
{% endhtmldm %}
{% cssdm %}
css代码
{% endcssdm %}
{% jsdm %}
js代码
{% endjsdm %}
*/

'use strict'
  
function htmldm (args, content) {
  return `<div class="dmyxcss"><link rel="stylesheet" type="text/css" href="/dmyx/js/codemirror/lib/codemirror_all.min.css" /><script type="text/javascript" src="//apps.bdimg.com/libs/jquery/1.11.3/jquery.min.js"></script><script type="text/javascript" src="/dmyx/js/codemirror/lib/codemirror_all.min.js"></script><link rel="stylesheet" type="text/css" href="/dmyx/css/bootstrap.min.css"><script src="/dmyx/js/one/one.min.js?v=1.287"></script><script src="/dmyx/js/bootstrap.min.js"></script><h1>html编辑器在线测试系统</h1><div id="demo"></div><div class="shezhi"><div class="code_pifu btn" data-id="default">白色</div><div class="code_pifu btn" data-id="ambiance">黑色</div><div class="code_pifu btn" data-id="mbo">灰色</div><div onclick="win()" class="code_pifu btn">预览效果</div><div class="btn text-center"><a class="headerlink btn-success margin-r-10" target="_blank" href="/example/try" onclick="return win();"><span aria-hidden="true" class="btn-default"></span>运行代码</a></div></div><div class="row"><span class="btn">html代码</span><span class="btn" onclick="autoFormatSelection(1)"><span aria-hidden="true"></span>格式化</span><span class="btn" onclick="commentSelection(true,1)" data-toggle="tooltip" data-placement="top" title="请先选择需要注释掉的代码"><span aria-hidden="true" class="glyphicon-plus"></span>添加注释</span><span class="btn" onclick="commentSelection(false,1)" data-toggle="tooltip" data-placement="top" title="请先选择需要去掉注释的代码"><span aria-hidden="true" class="glyphicon-minus"></span>权限注释</span><span class="btn" onclick="clearCode(1)" data-toggle="tooltip" data-placement="top" title="清空后按Ctrl+Z恢复代码"><span aria-hidden="true" class="glyphicon-trash"></span>清空</span></div><div class="border-solid"><textarea id="html_code" cols="10" rows="10" class="form-control" name="html_code" placeholder="HTML代码...">${content}</textarea></div>`
}

function cssdm (args, content) {
    return `<div class="row"><span class="btn">CSS代码</span><span class="btn"onclick="autoFormatSelection(2)"><span aria-hidden="true"></span>格式化</span><span class="btn"onclick="commentSelection(true,2)"data-toggle="tooltip"data-placement="top"title="请先选择需要注释掉的代码"><span aria-hidden="true"class="glyphicon-plus"></span>添加注释</span><span class="btn"onclick="commentSelection(false,2)"data-toggle="tooltip"data-placement="top"title="请先选择需要去掉注释的代码"><span aria-hidden="true"class="glyphicon-minus"></span>取消注释</span><span class="btn"onclick="clearCode(2)"data-toggle="tooltip"data-placement="top"title="清空后按Ctrl+Z恢复代码"><span aria-hidden="true"class="glyphicon-trash"></span>清空</span></div><div class="border-solid"><textarea id="css_code"cols="10"rows="10"class="form-control"name="css_code"placeholder="CSS代码...">${content}</textarea></div>`
}
function jsdm (args, content) {
    return `<div class="row"><span class="btn">JS代码</span><span class="btn"onclick="autoFormatSelection(3)"><span aria-hidden="true"></span>格式化</span><span class="btn"onclick="commentSelection(true,3)"data-toggle="tooltip"data-placement="top"title="请先选择需要注释掉的代码"><span aria-hidden="true"class="glyphicon-plus"></span>添加注释</span><span class="btn"onclick="commentSelection(false,3)"data-toggle="tooltip"data-placement="top"title="请先选择需要去掉注释的代码"><span aria-hidden="true"class="glyphicon-minus"></span>取消注释</span><span class="btn"onclick="clearCode(3)"data-toggle="tooltip"data-placement="top"title="清空后按Ctrl+Z恢复代码"><span aria-hidden="true"class="glyphicon-trash"></span>清空</span></div><div class="border-solid"><textarea id="js_code"cols="10"rows="10"class="form-control"name="js_code"placeholder="JS代码...">${content}</textarea></div><script charset="utf-8" data-pjax="" src="/js/dmyx.js"></script></div>`
}


hexo.extend.tag.register('htmldm', htmldm, { ends: true})
hexo.extend.tag.register('cssdm', cssdm, { ends: true})
hexo.extend.tag.register('jsdm', jsdm, { ends: true })


