//alert("attached");
window.onload = function(){
//	alert("Hi");
for (var i = 0; i < document.getElementById('adtest').getElementsByTagName("*").length; i++) {
	if(document.getElementById('adtest').getElementsByTagName("*")[i].src != null && document.getElementById('adtest').getElementsByTagName("*")[i].src != '')
	alert(document.getElementById('adtest').getElementsByTagName("*")[i].src + '\n\n')
}
};