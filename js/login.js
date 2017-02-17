window.onload=function(){
			var oBtn=document.getElementById('btn');
			var userName=document.getElementById('username');
			var passWord=document.getElementById('password');
			var oText=document.getElementById('login_text');
			oBtn.onclick=function(){
				if(userName.value.length==0){
					oText.style.display='block';
					userName.style.borderColor='black';
			 		oText.innerHTML="用户名不能为空！";
			 		return false;
				}
				if(passWord.value.length==0) {
					oText.style.display='block';
					passWord.style.borderColor='black';
			 		oText.innerHTML="密码不能为空！";
			 		return false;
				}
			  return true;		   
			}
		}