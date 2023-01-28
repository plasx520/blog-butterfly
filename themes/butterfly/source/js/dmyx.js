// 代码运行
var theme_code='ambiance';
var code_height=250;
var mixedModeHtml = {
	name: "htmlmixed",
	scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
					mode: null},
					{matches: /(text|application)\/(x-)?vb(a|script)/i,
					mode: "vbscript"}]
	};
	var myCodeMirrorHtml = CodeMirror.fromTextArea(document.getElementById("html_code"), {
	mode: mixedModeHtml,
	extraKeys: {
				"Ctrl-/": "autocomplete",
				"F11": function(cm) {
					cm.setOption("fullScreen", !cm.getOption("fullScreen"));
				},
				"Esc": function(cm) {
						if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
					}
			},
	selectionPointer: true,
	lineNumbers: true,
	lineWrapping: true,
	matchBrackets: true,
	theme: theme_code,
	styleActiveLine: true,
	indentUnit: 4,
	indentWithTabs: true,
	scrollbarStyle: "simple",
	autoCloseTags: true
	});
	myCodeMirrorHtml.setSize('100%', code_height);
	myCodeMirrorCss = CodeMirror.fromTextArea(document.getElementById("css_code"), {
		mode: "text/css",
		extraKeys: {
			"Ctrl-/": "autocomplete",
			"F11": function(cm) {
				cm.setOption("fullScreen", !cm.getOption("fullScreen"));
			},
			"Esc": function(cm) {
					if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
				}
		},
		value: document.documentElement.innerHTML,
		lineNumbers: true,
		theme: theme_code,
		styleActiveLine: true,
		lineWrapping: true,
		scrollbarStyle: "simple",
	});
	myCodeMirrorCss.setSize('100%', code_height);
	function getURL(url, c) {
	var xhr = new XMLHttpRequest();
	xhr.open("get", url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState != 4) return;
		if (xhr.status < 400) return c(null, xhr.responseText);
		var e = new Error(xhr.responseText || "No response");
		e.status = xhr.status;
		c(e);
	};
	}
	var server;
	getURL("/dmyx/js/codemirror/addon/hint/jsAll.json", function(err, code) {
	if (err) throw new Error("Request for js.json: " + err);
	server = new CodeMirror.TernServer({defs: [JSON.parse(code)]});
		myCodeMirrorJs.setOption("extraKeys", {
		"Ctrl-/": function(cm) { server.complete(cm)},
		"F11": function(cm) {cm.setOption("fullScreen", !cm.getOption("fullScreen"));},
		"Esc": function(cm) {if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);}
	})
	myCodeMirrorJs.on("cursorActivity", function(cm) { server.updateArgHints(cm); });
	});
	myCodeMirrorJs = CodeMirror.fromTextArea(document.getElementById("js_code"), {
		mode: "javascript",
		value: document.documentElement.innerHTML,
		lineNumbers: true,
		styleActiveLine: true,
		scrollbarStyle: "simple",
		lineWrapping: true,
		theme: theme_code,
		});
	myCodeMirrorJs.setSize('100%', code_height);
	function getSelectedRange(code) {
	return { from: code.getCursor(true), to: code.getCursor(false) };
	}
	function autoFormatSelection(type) {
		var autoCodeMirror;
		switch(type)
		{
			case 2:
				autoCodeMirror=myCodeMirrorCss;
			break;
			case 3:
				autoCodeMirror=myCodeMirrorJs;
			break;
			default:
				autoCodeMirror=myCodeMirrorHtml;
		}
	CodeMirror.commands["selectAll"](autoCodeMirror);
	var range = getSelectedRange(autoCodeMirror);
	autoCodeMirror.autoFormatRange(range.from, range.to);
	}
	function commentSelection(isComment,type) {
		var autoCodeMirror;
		switch(type)
		{
			case 2:
				autoCodeMirror=myCodeMirrorCss;
			break;
			case 3:
				autoCodeMirror=myCodeMirrorJs;
			break;
			default:
				autoCodeMirror=myCodeMirrorHtml;
		}
	var range = getSelectedRange(autoCodeMirror);
	autoCodeMirror.commentRange(isComment, range.from, range.to);
	}
	function win()
	{
		var myCode='';
        document.getElementById("demo").innerHTML = '<iframe id="iframe" scrolling="auto" src="/example/try/code/1/bd/rono" frameborder="0" height="400px" width="100%"></iframe>';
        document.getElementById('iframe').contentWindow.location.reload(true);
		myCode+=myCodeMirrorHtml.getValue();
		myCode+='<style>'+myCodeMirrorCss.getValue()+'</style>';
		myCode+='<script>'+myCodeMirrorJs.getValue()+'<\/script>';
		if(window.localStorage){
			try{
				localStorage.clear();
				localStorage.setItem("tryCode",myCode);
			}catch(oException){
				console.log(oException.name);
				if(oException.name == 'QuotaExceededError'){
					//console.log('超出本地存储限额！');
					localStorage.clear();
					localStorage.setItem("tryCode",myCode);
          
				}
			}
		}else{
			//var winEx = window.open("", "winEx", "width=700,height=600,top=150,left=600,status=yes,menubar=no,scrollbars=yes,resizable=yes");
			var winEx = window.open("", "_blank");
			winEx.document.open("text/html", "replace");
			winEx.document.write(myCode);
			winEx.document.close();
			return false;
		}
	}
	function clearCode(type){
		var clearCodeMirror;
		switch(type)
		{
			case 2:
				clearCodeMirror=myCodeMirrorCss;
			break;
			case 3:
				clearCodeMirror=myCodeMirrorJs;
			break;
			default:
				clearCodeMirror=myCodeMirrorHtml;
		}
		clearCodeMirror.setValue('');
	}
// 主题切换
	$('.code_pifu').click(function(){
			var code_pifu=$(this).attr('data-id');
			myCodeMirrorHtml.setOption("theme", code_pifu);
			myCodeMirrorCss.setOption("theme", code_pifu);
			myCodeMirrorJs.setOption("theme", code_pifu);
	});