# lottery_number
开奖动画效果<br>
演示：http://runjs.cn/detail/fd4c0nqi

##调用方法
默认配置：
 var myconfig={
            id:"#lottery_number", //放置的容器id<br>
            start_speed:10, //转动的速度<br>
            stop_speed:10,//停止时的速度<br>
            type:"span",//输出dom类型<br>
            pic_height:582,//图片高度<br>
            pic_one:58//每个字块的高度<br>
        };<br>
     var lot=lotteryNum(myconfig);<br>
      加载：lot.init("0,3,5,7,9");<br>
      停止： lot.stop();<br>
      开始： lot.start();<br>
  


