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
					oIndexmenus[i].style.display='block';
				}
				oIndexli[i].onmouseout=oIndexmenu.onmouseout=function(){
					oIndexTime=setTimeout(function(){
						oIndexmenu.style.display='none';
					},500);
				}			
			}			
		}	