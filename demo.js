/**
 * Created by TMDPYY on 2016/6/19.
 */
$(function(){
    var lunBoShow=document.getElementById('lunBoShow');
    var myImg=lunBoShow.getElementsByTagName('img');
    var num,mytime1,mytime2,myChang=true,changNum= 0,myChang2=true,myChangNum2= 0,myRon1= 1,myRon2= 1,myRon3= 0,time1,time2,time3;
    $('*').css({'margin':0,'padding':0});
    $('#banner').css({'background':'#25242f','position':'relative','width':'100%','height':'667px','overflow':'hidden'});
    $('#banner>section:nth-child(1) h2').css({'padding':'0 0 40px 20px','border-left':'1px solid #fff','margin':'20px 0 0 55px'});
    $('#banner>section:nth-child(1) h2 a').css({'color':'#fff','text-transform':'uppercase','font-size':'20px','text-decoration':'none'}).hover(function(){
        $(this).css('color','#00ffff');
    },function(){
        $(this).css('color','#fff');
    });
    $('#banner>section:nth-child(1)').css({'position':'absolute','top':'60px','left':'100px'});
    $('#banner>section:nth-child(1) img').css({'width':'110px'});
    $('#banner>section:nth-child(2)').css({'position':'absolute','top':'70px','right':'0'});
    $('#banner>section:nth-child(2) ul').css({'padding':'0 100px 10px 10px','border-bottom':'1px solid #999'});
    $('#banner>section:nth-child(2) ul li').css({'display':'inline-block','list-style':'none','width':'25px','text-align':'center'}).mouseenter(function(){
        $('#banner>section:nth-child(2) ul').css({'border-color':'#00ffff','-webkit-transition':'all .3s linear'});
        $(this.getElementsByTagName('i')[0]).css({'-webkit-transform':'scale(0.5,0.5)','color':'#888','-webkit-transition':'all .3s linear'});
    }).mouseleave(function(){
        $('#banner>section:nth-child(2) ul').css({'border-color':'#999','-webkit-transition':'all .3s linear'});
        $(this.getElementsByTagName('i')[0]).css({'-webkit-transform':'scale(1,1)','color':'#fff','-webkit-transition':'all .3s linear'});
    });
    $('#banner>section:nth-child(2) ul li a').css({'color':'#fff',"font-size":'16px'});
    $('#banner>section:nth-child(4)').css({'position':'absolute','bottom':'70px','right':'60px','width':'312px','height':'72px'}).mouseleave(function(){
        $('#banner>section:nth-child(4) div').css({'width':'0','webkit-transition':'all .5s linear'});
        $('#banner>section:nth-child(4) h3').css('color','#fff');
    });
    $('#banner>section:nth-child(4) h3').css({"color":'#fff',"margin-bottom":'10px'}).mouseenter(function(){
        $('#banner>section:nth-child(4) div').css({'width':'312px','webkit-transition':'all .5s linear'});
        $(this).css('color','#00ffff');
    });
    $('#banner>section:nth-child(4) p').css({'color':'#888','font-size':'12px','line-height':'20px'});
    $('#banner>section:nth-child(4) div').css({'width':'0','height':'40px','overflow':'hidden'});
    $('#banner>section:nth-child(3)').css({'position':'absolute','bottom':'80px','left':'0px','width':'321px','height':'140px','text-align':'center'}).mouseleave(function(){
        $('#banner>section:nth-child(3) img').slideUp('slow');
        $('#banner>section:nth-child(3) h3').css({'color':'#fff'});
    });
    $('#banner>section:nth-child(3) h3').css({"color":'#fff','width':'321px','height':'22px','position':'absolute','top':'59px','left':'0'}).mouseenter(function(){
        $('#banner>section:nth-child(3) img').slideDown('slow');
        $(this).css({'color':'#00ffff'});
    });
    $('#banner>section:nth-child(3) img').css({'width':'80px','height':'53px','display':'none','margin-bottom':'28px'}).click(function(){
        $('#lunBoBG').css({'display':'block'});
        var myArr=this.src.split('/');
        num=parseInt(myArr[myArr.length-1]);
        $('#lunBoBG img:nth-of-type('+panduan(num,2)+')').css({'position':'absolute','top':'0','left':'-1600px'});
        $('#lunBoBG img:nth-of-type('+panduan(num,1)+')').css({'position':'absolute','top':'0','left':'-800px'});
        $('#lunBoBG img:nth-of-type('+num+')').css({'position':'absolute','top':'0','left':'0'});
        $('#lunBoBG img:nth-of-type('+panduan2(num,1)+')').css({'position':'absolute','top':'0','left':'800px'});
        $('#lunBoBG img:nth-of-type('+panduan2(num,2)+')').css({'position':'absolute','top':'0','left':'1600px'});
    });
    $('#lunBoBG').css({'display':'none','padding':'68.5px 283px','position':'absolute','top':'0','left':'0','width':'800px','height':'530px','background':'rgba(0,255,255,0.8)','z-index':'100'});
    $('#lunBoBG button:nth-of-type(1)').css({'position':'absolute','top':'60px','right':'230px','background':'none','border':'none','outline':'none','font-size':'40px'}).click(function(){
        $('#lunBoBG').css({'display':'none'});
    });
    $('#lunBoBG button:nth-of-type(2)').css({'position':'absolute','top':'300px','left':'230px','background':'none','border':'none','outline':'none','font-size':'60px'}).click(function(){
        if(parseInt(myImg[num-1].style.left)>-1600) {
            for(var i=0;i<myImg.length;i++){
                if (parseInt(myImg[i].style.left) == -1600) {
                    myImg[i].style.left = '1600px';
                    myImg[i].style.webkitTransition = 'all 0s linear';
                } else {
                    myImg[i].style.left = parseInt(myImg[i].style.left) - 800 + 'px';
                    myImg[i].style.webkitTransition = 'all .5s linear';
                }
            }
        }else {
            clearInterval(mytime1);
            clearTimeout(mytime2);
            mytime1=setInterval(function(){
                if(myChang){
                    lunBoShow.style.left=parseInt(lunBoShow.style.left)-1+"px";
                        changNum++;
                    if(changNum==10){
                        myChang=false;
                    }
                }else {
                    lunBoShow.style.left=parseInt(lunBoShow.style.left)+1+"px";
                    changNum--;
                    if(changNum==-10){
                        myChang=true;
                    }
                }
            },1);
            mytime2=setTimeout(function(){
                clearInterval(mytime1);
                myChang=true;
                changNum=0;
                $('#lunBoShow').css('left','283px');
            },500);
        }
    });
    $('#lunBoBG button:nth-of-type(3)').css({'position':'absolute','top':'300px','right':'230px','background':'none','border':'none','outline':'none','font-size':'60px'}).click(function(){
        if(parseInt(myImg[num-1].style.left)<1600) {
            for(var i=0;i<myImg.length;i++){
                if (parseInt(myImg[i].style.left) == 1600) {
                    myImg[i].style.left = '-1600px';
                    myImg[i].style.webkitTransition = 'all 0s linear';
                } else {
                    myImg[i].style.left = parseInt(myImg[i].style.left) + 800 + 'px';
                    myImg[i].style.webkitTransition = 'all .5s linear';
                }
            }
        }else {
            clearInterval(mytime1);
            clearTimeout(mytime2);
            mytime1=setInterval(function(){
                if(myChang){
                    lunBoShow.style.left=parseInt(lunBoShow.style.left)+1+"px";
                    changNum++;
                    if(changNum==10){
                        myChang=false;
                    }
                }else {
                    lunBoShow.style.left=parseInt(lunBoShow.style.left)-1+"px";
                    changNum--;
                    if(changNum==-10){
                        myChang=true;
                    }
                }
            },1);
            mytime2=setTimeout(function(){
                clearInterval(mytime1);
                myChang=true;
                changNum=0;
                $('#lunBoShow').css('left','283px');
            },500);
        }
    });
    $('#lunBoShow').css({'position':'absolute','top':'68.5px','left':'283px','overflow':'hidden','width':'800px','height':'530px'});
    $('#banner>section:nth-child(5)').css({'width':'500','height':'300','margin':'183px auto','position':'relative','perspective':'500px','transform-style':'preserve-3d'}).hover(function(){
        clearInterval(time2);
        clearInterval(time1);
        $('#banner>section:nth-child(5) div').css('border-color','#999');
        time3=setInterval(function(){
            if(myChangNum2>0){
                $('#banner>section:nth-child(5)').css('transform','rotate3d('+myRon1+','+myRon2+','+myRon3+','+myChangNum2+'deg)');
                myChangNum2--;
            }else if(myChangNum2<0) {
                $('#banner>section:nth-child(5)').css('transform','rotate3d('+myRon1+','+myRon2+','+myRon3+','+myChangNum2+'deg)');
                myChangNum2++;
            }
        },10);
    },function(){
        $('#banner>section:nth-child(5) div').css('border-color','#00ffff');
        clearInterval(time3);
        time1=setInterval(mystyle,10);
    });
    $('#banner>section:nth-child(5) div').css({'width':'286px','height':'286px','position':'absolute',"top":'0','left':'0','border':'14px solid #00ffff'});
    $('#banner>section:nth-child(5) h1').css({'position':'absolute','top':'70px','left':'144px','color':'#fff','font-size':'40px','text-transform':'uppercase','transform':'translateZ(50px)'}).hover(function(){
        $(this).css('color','#00ffff');
    },function(){
        $(this).css('color','#fff');
    });
    $('#banner>section:nth-child(5) h2').css({'position':'absolute','top':'130px','left':'144px','color':'#999','font-size':'30px','transform':'translateZ(50px)'}).hover(function(){
        $(this).css('color','#00ffff');
    },function(){
        $(this).css('color','#999');
    });
    $('#banner>section:nth-child(5) p').css({'position':'absolute','top':'180px','left':'144px','color':'#fff','font-size':'20px','transform':'translateZ(50px)'}).hover(function(){
        $(this).css('color','#00ffff');
    },function(){
        $(this).css('color','#fff');
    });
    $('#banner>video').css({'position':'absolute','top':'0','left':'0','width':'100%','z-index':'1'})[0].onended=function(){
        $('#banner>video').css('z-index','-20');
        //clearInterval(time1);
        //time1=setInterval(mystyle,10);
    };
    $('#banner>section').css('z-index','20');
    function mystyle(){
        if(myChang2){
            $('#banner>section:nth-child(5)').css('transform','rotate3d('+myRon1+','+myRon2+','+myRon3+','+myChangNum2+'deg)');
            myChangNum2++;
            if(myChangNum2>=360){
                myChang2=false;
                var rontest=parseInt(Math.random()*80);
                if(rontest<20){
                    myRon1=1;
                    myRon2=0;
                    myRon3=1;
                }else if(rontest>=20&&rontest<40){
                    myRon1=0;
                    myRon2=1;
                    myRon3=1;
                }else if(rontest>=40&&rontest<60){
                    myRon1=1;
                    myRon2=1;
                    myRon3=0;
                }else if(rontest>=60&&rontest<80){
                    myRon1=1;
                    myRon2=1;
                    myRon3=1;
                }
            }
        }else {
            console.log(myRon1+'--'+myRon2+'---'+myRon3);
            $('#banner>section:nth-child(5)').css('transform','rotate3d('+myRon1+','+myRon2+','+myRon3+','+myChangNum2+'deg)');
            myChangNum2--;
            if(myChangNum2<=-360){
                myChang2=true;
                var rontest=parseInt(Math.random()*80);
                if(rontest<20){
                    myRon1=1;
                    myRon2=0;
                    myRon3=1;
                }else if(rontest>=20&&rontest<40){
                    myRon1=0;
                    myRon2=1;
                    myRon3=1;
                }else if(rontest>=40&&rontest<60){
                    myRon1=1;
                    myRon2=1;
                    myRon3=0;
                }else if(rontest>=60&&rontest<80){
                    myRon1=1;
                    myRon2=1;
                    myRon3=1;
                }
            }
        }
    }
});
function panduan(obj,num){
    if(obj-num>=1){
        return obj-num;
    }else {
        return 5-((1-(obj-num))-1);
    }
}
function panduan2(obj,num){
    if(obj+num<=5){
        return obj+num;
    }else {
        return obj+num-5;
    }
}











