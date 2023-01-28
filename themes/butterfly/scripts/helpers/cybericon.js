hexo.extend.helper.register('cybericon', function () {
    var icon = [
        '#icon-a-42_data-analysisai-m-olap',
        '#icon-a-68_devcloud-collaboration',
        '#icon-a-355_wsa',
        '#icon-V',
     ]
    var index = Math.floor(Math.random()*icon.length);
    return icon[index]
  });