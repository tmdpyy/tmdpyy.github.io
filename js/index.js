/**
 * Created by TMDPYY on 2016/6/14.
 */
var myDiv1=document.getElementById('login');
var myDiv2=document.getElementById('enroll');
var aOne=document.getElementById('azc');
var aTwo=document.getElementById('adl');
var pic1=document.getElementById('pic1');
var pic2=document.getElementById('pic2');
var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var search=document.getElementById('search');
var searchi=search.getElementsByTagName('i')[0];
var searchText=document.getElementById('searchText');
var headerli=document.getElementsByClassName('headerli');
var lunboshow=document.getElementById('lunboshow');
var lunboLeft=document.getElementById('lunboLeft');
var lunboRight=document.getElementById('lunboRight');
var product=document.getElementById('product');
var product2show=document.getElementById('product2show');
var lunboyanci=0;
var lunboyanci2=0;
var lunboyanci3=0;
var lunboyanci4=0;
var headerlinum=0;
var mytime;
var num=0;
var num2=0;
lunboshow.style.marginLeft=0;
aOne.onclick=function(){
    if(num==0&&num2==0){
        myDiv1.style.top='100px';
        myDiv1.style.webkitTransition="top .5s linear";
        myDiv2.style.top='100px';
        myDiv2.style.webkitTransform="perspective(600px) rotateY(-90deg)";
        num=1;
    }else if(num==1&&num2==0){
        myDiv1.style.top='-500px';
        myDiv1.style.webkitTransition="top .5s linear";
        myDiv2.style.top='-500px';
        myDiv2.style.webkitTransform="perspective(600px) rotateY(0deg)";
        myDiv2.style.webkitTransition=null;
        num=0;
    }else if(num2==1&&num==0){
        myDiv2.style.webkitTransform="perspective(600px) rotateY(-90deg)";
        myDiv2.style.webkitTransition="all .5s linear";
        setTimeout(function(){
            myDiv1.style.webkitTransform="perspective(600px) rotateY(0deg)";
            myDiv1.style.webkitTransition="all .5s linear";
        },500);
        num2=0;
        num=1;
    }
};
aTwo.onclick=function(){
    if(num2==0&&num==0){
        myDiv2.style.top='100px';
        myDiv2.style.webkitTransition="top .5s linear";
        myDiv1.style.top='100px';
        myDiv1.style.webkitTransform="perspective(600px) rotateY(90deg)";
        num2=1;
    }else if(num2==1&&num==0){
        myDiv2.style.top='-500px';
        myDiv2.style.webkitTransition="top .5s linear";
        myDiv1.style.top='-500px';
        myDiv1.style.webkitTransform="perspective(600px) rotateY(0deg)";
        myDiv1.style.webkitTransition=null;
        num2=0;

    }else if(num==1&&num2==0){
        myDiv1.style.webkitTransform="perspective(600px) rotateY(90deg)";
        myDiv1.style.webkitTransition="all .5s linear";
        setTimeout(function(){
            myDiv2.style.webkitTransform="perspective(600px) rotateY(0deg)";
            myDiv2.style.webkitTransition="all .5s linear";
        },500);
        num2=1;
        num=0;
    }
};
p1.onclick=function(){
    myDiv1.style.webkitTransform="perspective(600px) rotateY(90deg)";
    myDiv1.style.webkitTransition="all .5s linear";
    setTimeout(function(){
        myDiv2.style.webkitTransform="perspective(600px) rotateY(0deg)";
        myDiv2.style.webkitTransition="all .5s linear";
    },500)
};
p2.onclick=function(){
    myDiv2.style.webkitTransform="perspective(600px) rotateY(-90deg)";
    myDiv2.style.webkitTransition="all .5s linear";
    setTimeout(function(){
        myDiv1.style.webkitTransform="perspective(600px) rotateY(0deg)";
        myDiv1.style.webkitTransition="all .5s linear";
    },500)
};
pic1.onclick=function(){
    myDiv1.style.top='-500px';
    myDiv1.style.webkitTransition="top .5s linear";
    myDiv2.style.top='-500px';
    myDiv2.style.webkitTransform="perspective(600px) rotateY(0deg)";
    myDiv2.style.webkitTransition=null;
    num=0;
};
pic2.onclick=function(){
    myDiv2.style.top='-500px';
    myDiv2.style.webkitTransition="top .5s linear";
    myDiv1.style.top='-500px';
    myDiv1.style.webkitTransform="perspective(600px) rotateY(0deg)";
    myDiv1.style.webkitTransition=null;
    num2=0;
};
setInterval(function(){
    if(document.documentElement.offsetWidth<=800){
        document.documentElement.style.fontSize="12px";
        document.body.style.width="800px";
    }else if(document.documentElement.offsetWidth>=2500){
        document.documentElement.style.fontSize="37.5px";
        document.body.style.width="2500px";
    }else {
        document.documentElement.style.fontSize=document.documentElement.offsetWidth*0.015+"px";
        document.body.style.width="100%";
    }
},10);
search.onclick=function(){
    searchText.focus();
    for (var i = 0; i < headerli.length; i++) {
        headerli[i].style.marginRight = 1.85 + "rem";
        headerli[i].style.webkitTransition = "all .5s linear";
    }
    searchText.style.width = 8.5 + "rem";
    searchText.style.webkitTransition = "all .5s linear";
    search.style.width = 1.5 + "rem";
    search.style.background = "#fff";
    searchi.style.color = " rgba(0,0,0,0.5)";
    search.style.webkitTransition = "width .5s linear";
};
search.onmouseover=function(){
    headerlinum=1;
};
search.onmouseout=function(){
    headerlinum=0;
};
searchText.onblur=function(){
    if(headerlinum==0){
        for(var i=0;i<headerli.length;i++) {
            headerli[i].style.marginRight = 3.25 + "rem";
            searchText.style.width =0;
            search.style.background = "none";
            searchi.style.color = " rgba(255,255,255,0.7)";
        }
    }
};
lunboRight.onmousedown=rightLB1;
function rightLB1(){
        clearInterval(mytime);
        if(lunboyanci3==0){
        if(parseInt(lunboshow.style.marginLeft)==-155){
            lunboshow.style.marginLeft=0;
            lunboshow.style.webkitTransition=null;
        }
        lunboyanci3=1;
        setTimeout(function(){
            lunboyanci3=0;
        },400)
    }

}
lunboRight.onmouseup=rightLB2;
function rightLB2(){
    if(lunboyanci4==0){
        lunboshow.style.marginLeft=parseInt(lunboshow.style.marginLeft)-31+"rem";
        lunboshow.style.webkitTransition="all .3s linear";
        lunboyanci4=1;
        setTimeout(function(){
            lunboyanci4=0;
        },500);
    }
        mytime=setInterval(function(){
            rightLB1();
            setTimeout(function(){
                rightLB2();

            },11);
        },5000);
}
lunboLeft.onmousedown=leftLB1;
function leftLB1(){
        clearInterval(mytime);
        if(lunboyanci==0){
        if (parseInt(lunboshow.style.marginLeft) == 0) {
            lunboshow.style.marginLeft = -155 + "rem";
            lunboshow.style.webkitTransition = null;
        }
        lunboyanci=1;
        setTimeout(function(){
            lunboyanci=0;
        },400);
    }
}
lunboLeft.onmouseup=leftLB2;
function leftLB2(){
    if(lunboyanci2==0){
        lunboshow.style.marginLeft=parseInt(lunboshow.style.marginLeft)+31+"rem";
        lunboshow.style.webkitTransition="all .3s linear";
        lunboyanci2=1;
        setTimeout(function(){
            lunboyanci2=0;
        },500);
    }
    mytime=setInterval(function(){
        rightLB1();
        setTimeout(function(){
            rightLB2();

        },11);
    },5000);
}
mytime=setInterval(function(){
    rightLB1();
    setTimeout(function(){
        rightLB2();

    },11);
},5000);
function Photo(obj,url){
    this.url=url;
    this.obj=obj;
}
Photo.prototype.show=function(){
    this.obj.innerHTML+=' <div' +
        '><div' +
        '><div' +
        '><div' +
        '><span class="left"><i class="fa fa-bookmark" aria-hidden="true"></i> 交互设计</span' +
        '> <span class="right">692 <i class="fa fa-fire" aria-hidden="true"></i></span> <' +
        '/div> <' +
        '/div> <' +
        'img src="'+this.url+'" alt=""> <' +
        '/div> <' +
        'p>新版 Material Design 官方动效指南</p> <' +
        'hr> <' +
        'span class="left">2016-05-14</span> <' +
        'span class="right"><' +
        'i class="fa fa-heart" aria-hidden="true"></i> 3 <' +
        'i class="fa fa-comment" aria-hidden="true"></i> 0<' +
        '/span> <' +
        '/div>';
};
Photo.prototype.show2=function(){
    this.obj.innerHTML+='  <div> <img src="'+this.url+'" alt=""> <div> <i class="fa  fa-link" aria-hidden="true"></i> <div> <p>时尚女郎</p> <p> <span class="left">3周前</span> <span class="right"><i class="fa fa-heart" aria-hidden="true"></i> 0 <i class="fa fa-eye" aria-hidden="true"></i> 729 <i class="fa fa-comment" aria-hidden="true"></i> 0</span> </p> </div> </div> </div>'
};
var abc=new Photo(product,"./image/1.jpg");
abc.show();
abc.url='./image/2.jpg';
abc.show();
abc.url='./image/3.jpg';
abc.show();
abc.url='./image/4.jpg';
abc.show();
abc.url='./image/5.jpg';
abc.show();
abc.url='./image/6.jpg';
abc.show();
abc.url='./image/7.jpg';
abc.show();
abc.url='./image/8.jpg';
abc.show();
abc.url='./image/9.jpg';
abc.show();
abc.url='./image/10.png';
abc.show();
abc.url='./image/11.jpg';
abc.show();
abc.url='./image/12.jpg';
abc.show();
abc.obj=product2show;
abc.url='./image/foot1.jpg';
abc.show2();
abc.url='./image/foot2.jpeg';
abc.show2();
abc.url='./image/foot3.jpeg';
abc.show2();
abc.url='./image/foot4.jpeg';
abc.show2();
abc.url='./image/foot5.jpeg';
abc.show2();
abc.url='./image/foot6.jpeg';
abc.show2();
abc.url='./image/foot7.jpeg';
abc.show2();
abc.url='./image/foot8.jpeg';
abc.show2();