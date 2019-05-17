function login(){
	$.ajax({
		url:"http://192.168.43.6:8080/Face/LoginServlet",
		method:"post",
		data:{
			username:$("#username").val(),
			password:$("#password").val(),
		},
		type:"json",
		success:function(data){
			alert(data);
		}
	})
}
function faceLogin(imgData){
	$.ajax({
		url:"http://192.168.43.6:8080/Face/FaceLoginServlet",
		method:"post",
		data:{
			imgData:imgData
		},
		type:"json",
		success:function(data){
			var rs = $.parseJSON(data);
			if(rs.flag){
				var sex = rs.sex;
				var sc = rs.sc;
				var exp = rs.exp;
				var type = rs.type;
				localStorage.setItem("sex",sex);
				localStorage.setItem("sc",sc);
				localStorage.setItem("exp",exp);
				localStorage.setItem("type",type);
				stopWait();
				window.location.href="home.html";
			}else if(rs.username == "strangeness"){
				stopWait();
				alert("您的权限不足！");
			}else{
				stopWait();
				alert("照片不清晰，请重新识别");
			}
			
		}
	})
}
function setInfo(){
	var sex = localStorage.getItem("sex");
	var sc = localStorage.getItem("sc");
	var exp = localStorage.getItem("exp");
	var type = localStorage.getItem("type");
	$("#sex").html(sex);
	$("#sc").html(sc);
	$("#exp").html(exp);
	$("#type").html(type);
}