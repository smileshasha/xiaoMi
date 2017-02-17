window.onload=function(){
				var reg_Text1=document.getElementById('reg_text1');
				var reg_Text2=document.getElementById('reg_text2');
				var reg_Text3=document.getElementById('reg_text3');
				var regBtn=document.getElementById('reg_btn');
				var oPhoto=document.getElementById('photo');
				var oPassword=document.getElementById('password');
				var oPassword1=document.getElementById('password1');
				var regPhoto=/^1[3|5|8|4][0-9]{9}$/
				regBtn.onclick=function(){
					if(oPhoto.value.length==0){
						reg_Text1.style.display='block';
						reg_Text1.innerHTML="请填入手机号";
						oPhoto.style.borderColor='black';
						return false;
					}
					if(!regPhoto.test(oPhoto.value)){
						reg_Text1.style.display='block';
						reg_Text1.innerHTML="手机号格式不正确";
						regPhoto.focus();
						return false;
					}
					if(oPassword.value.length==0){
						reg_Text2.style.display='block';
						reg_Text2.innerHTML="请设置密码";
						oPassword.style.borderColor='black';
						return false;
					}
					if(oPassword1.value.length==0){
						reg_Text3.style.display='block';
						reg_Text3.innerHTML="请确认密码";
						oPassword1.style.borderColor='black';
						return false;
					}
					if(oPassword.value!=oPassword1.value){
						reg_Text3.style.display='block';
						reg_Text3.innerHTML="密码不一致";
						return false;
					}
					return true;
				}
			}