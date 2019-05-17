var waiting1;
function wait(){
	waiting1= plus.nativeUI.showWaiting("识别中...");
}
function stopWait(){
	waiting1.close();
}