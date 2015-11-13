/**
 * Created by Administrator on 2015/11/13.
 */
//
(function(globe){

    var lottery=function(obj){
        var myconfig={
            id:"#lottery_number", //放置的容器id
            start_speed:10, //转动的速度
            stop_speed:10,//停止时的速度
            type:"span",//输出dom类型
            pic_height:582,//图片高度
            pic_one:58//每个字块的高度
        };
        this.obj=obj||myconfig;
        this.pic_height=obj.pic_height-obj.pic_one;
        this.lotobj=$(this.obj.id).html("");
        this.lotobj_son=[];
        this.timer=null;
        return this;
    };
    lottery.prototype= {
        init:function(num){
            var i=0;
            var _this=this;
            var number=typeof num==="object"?num:num.split(",");
            var obj=this.obj;
            for(;i< number.length;i++){
                var _tmp=document.createElement(_this.obj.type);
                var wz=Math.ceil(number[i]*obj.pic_one);
                _tmp.style.backgroundPositionY=-wz+"px";
                this.lotobj_son.push({"domobj":_tmp,"postion":wz});
                this.lotobj.append(_tmp);
            }
        },
        start:function(){
            var _this = this;
            var _tmpobj= this.lotobj_son;
            var y=0;
            clearInterval(_this.timer);
            function _start() {
                var i = 0;
                for (i in _tmpobj) {
                    var p=0-getstyle(_tmpobj[i].domobj,"background-position-y");
                    if(p<_this.obj.pic_height-_this.obj.pic_one){
                        p=p+_this.obj.stop_speed;
                    }
                    else{
                        p=0;
                    }
                    _tmpobj[i].domobj.style.backgroundPositionY = 0 - p + "px";
                }
            }
            this.timer=timer(_start);
            return this;
        },
        stop:function(){
            var _this=this;
            var _tmplist= _this.lotobj_son;
            clearInterval(_this.timer);
            var s=0;
            for (s in _tmplist){
                var p=0-getstyle(_tmplist[s].domobj,"background-position-y");
                var t=_this.obj.pic_height;
                var r=s==0?_this.obj.pic_one/2:s*_this.obj.pic_one;
                var c=_tmplist[s].postion-r;
                c=Math.abs(c);
                _tmplist[s].domobj.style.backgroundPositionY=(0-c)+"px";
            }
            function _stop() {
                var i = 0;
                for (i in  _tmplist) {
                    var wz=0-getstyle(_tmplist[i].domobj,"background-position-y");
                    var speed = (_tmplist[i].postion-wz)/_this.obj.stop_speed;
                    speed = speed>0?Math.ceil(speed):Math.floor(speed);
                    _tmplist[i].domobj.style.backgroundPositionY = -(wz+speed) + "px";
                }
            }
            this.timer=timer(_stop);
            return this;

        }
    };
    //兼容处理
    function timer(fn){
        return setInterval(fn,100/6);
    }
    function getstyle(element,attr) {
        //如果支持W3C，使用getComputedStyle来获取样式
        if (typeof  window.getComputedStyle != 'undefined')
        {
            return parseInt(window.getComputedStyle(element, null)[attr]);
        } else if (element.currentStyle) {
            return parseInt(element.currentStyle[attr]);
        }
    }
    globe.lotteryNum=function(s){
        return new lottery(s);
    }
})(window);
