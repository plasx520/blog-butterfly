'use strict'

function mima(args, content) {
    args = args.join(' ').split(',')
    let neir = args[0]
    return `${neir}：<input type="password" id="password" placeholder="请输入密码">
    <input  id="ok" type="button" value="确认" onclick="ok();">
    <div id="demo"></div>
  <script>
  var password = document.getElementById("password");
  function ok(){
    var passwordvl = password.value;
    var str=window.atob('MzAxNQ==');
    if(passwordvl != str){
        btf.snackbarShow('密码错误宝宝你要干嘛', false, 3000)
        return false;
    }else{
        btf.snackbarShow('密码正确已打开加密内容', false, 3000)
        document.getElementById("demo").innerHTML = '${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}';
    }
  }
  </script>`
}

hexo.extend.tag.register('mima',mima, { ends: true })
