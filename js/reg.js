function reg(){
	var fi = localStorage.getItem("face");
	var un = localStorage.getItem("username");
	var pw = localStorage.getItem("password");
	$.ajax({
		url:"http://192.168.43.6:8080/Face/FaceRegServlet",
		method:"post",
		data:{
			username:un,
			password:pw,
			imgData:fi
		},
		type:"json",
		success:function(data){
			alert(data);
			window.location.href="index.html";
		}
	})
}