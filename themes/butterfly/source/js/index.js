 /*首页下载板块更新悬浮效果*/
    $(".down-index .type a").hover(function (e) {
        $(".down-index .type .hover").removeClass("hover");
        $(this).addClass("hover");
        /*计算当前应该偏移的高度*/
        var index = $(".down-index .type .hover").index();
        var x = $(".down-index").width() * index + parseInt($(".down-index").css("margin-right")) * index;
        $(".down-index .tpl-tr1").css("transform", "translateX(-" + x + "px)");
    });
 /*首页下载板块更新悬浮效果*/
 $(".down-list .type a").hover(function (e) {
    $(".down-list .type .hover").removeClass("hover");
    $(this).addClass("hover");
    /*计算当前应该偏移的高度*/
    var index = $(".down-list .type .hover").index();
    var x = $(".down-list").width() * index + parseInt($(".down-list").css("margin-right")) * index;
    $(".down-list .tpl-tr").css("transform", "translateX(-" + x + "px)");
});

//首页大卡片恢复显示
$(".div-card3").hover(function () {
}, function () {
  hoverOnCommentBarrage = false;
  document.getElementById("todayCard").classList.remove('hide');
  document.getElementById('todayCard').style.zIndex = 1;
});

  function buttonClick() {
    if (document.getElementById("todayCard")) {
      document.getElementById("todayCard").classList.add('hide');
    }
  }
