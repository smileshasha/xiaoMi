window.onload=function(){
    var oShopbtn=document.getElementById('shopcarbtn');
            var oShopcar=document.getElementById('shopcar');
            var shopTimer=null;
            var that;
            oShopbtn.onmouseover=oShopcar.onmouseover=function shopcarShow(){           
                oShopbtn.style.backgroundColor='white'; 
                oShopbtn.style.color='red';
                oShopcar.style.display='block';
                clearTimeout(shopTimer);                        
            }                               
            oShopbtn.onmouseout=oShopcar.onmouseout=function shopcarHidden(){
                shopTimer=setTimeout(function(){
                    oShopbtn.style.backgroundColor='#424242';   
                    oShopbtn.style.color='#b0b0b0';
                    oShopcar.style.display='none';  
                },300);
            }
            var oIndexnav=document.getElementsByClassName('index_nav')[0];          
            var oIndexli=oIndexnav.getElementsByTagName('li');          
            var oIndexmenu=document.getElementById('index_navMenu');
            var oIndexmenus=oIndexmenu.getElementsByTagName('ul');
            var oIndexTime=null;
            for(var i=0;i<oIndexli.length;i++){
                oIndexli[i].index=i;                
                oIndexli[i].onmouseover=function(){
                    for(var i=0;i<oIndexli.length;i++){
                        oIndexmenus[i].style.display='none';
                    }               
                    clearTimeout(oIndexTime);
                    oIndexmenu.style.display='block';
                    oIndexmenus[this.index].style.display='block';
                }
                oIndexmenu.onmouseover=function(){
                    clearTimeout(oIndexTime);
                    oIndexmenu.style.display='block';
                    oin
                    oIndexmenus[i].style.display='block';
                }
                oIndexli[i].onmouseout=oIndexmenu.onmouseout=function(){
                    oIndexTime=setTimeout(function(){
                        oIndexmenu.style.display='none';
                    },500);
                }           
            }           
    var oCenterli=document.getElementsByClassName('center_logo');
            var ocenterimg=oCenterli[0].getElementsByTagName('img');
            for(var i=0;i<ocenterimg.length;i++){
                ocenterimg[i].onmouseover=function(){
                    for(var i=0;i<ocenterimg.length;i++){
                        ocenterimg[i].className="";
                    }
                    this.className='box';
                }
            }           
	
            function fn(liid,boxid){  // 封装函数  参数的传递
            	var li_lief=document.getElementById(liid);
                var box = document.getElementById(boxid);
                li_lief.onmouseover = function(){
                    box.style.display="block";
                }
                li_lief.onmouseout = function(){
                    box.style.display="none";
                }
            }
            fn("left-message1","child1"); // 实参  调用函数
            fn("left-message2","child2");
            fn("left-message3","child3");
            fn("left-message4","child4");
            fn("left-message5","child5");
            fn("left-message6","child6");
            fn("left-message7","child7");
            fn("left-message8","child8");
            fn("left-message9","child9");
            
            var container = document.getElementById('contaner');
            var list = document.getElementById('contaner-img');
            var buttons = document.getElementById('buttons').getElementsByTagName('li');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 5;
            var animated = false;
            var interval = 6130;
            var timer;


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -1226 * len + 'px';
                        }
                        if(left<(-1226 * len)) {
                            list.style.left = '-1226px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'current'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'current';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1226);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1226);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1226 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();
}
