
if(window.opener) {
         previewString = unescape(window.opener.document.getElementById('previewText').value);
         countValStr = window.opener.document.getElementById('adCount').value;
}
else {
         previewString = unescape(window.parent.document.getElementById('previewText').value);
         countValStr = window.parent.document.getElementById('adCount').value;
}

tags= previewString.split('!@#$%');

var finalStr = "";
for(var i=0;i<tags.length;i++) {

finalStr += "<div id='adTag" + i + "' style='display:block;'><frame>" + tags[i] + "</frame><div id='adTagdiv"+ i +"'>adTagRep"+ i +"</div></div>" 

}
document.write(finalStr);


window.onload = function(){
	//alert("Hi");

/*for (var i = 0; i < document.getElementById('adtest').getElementsByTagName("*").length; i++) {
	if(document.getElementById('adtest').getElementsByTagName("*")[i].src != null && document.getElementById('adtest').getElementsByTagName("*")[i].src != '')
	alert(document.getElementById('adtest').getElementsByTagName("*")[i].src + '\n\n')
}*/

for (var i = 0; i < tags.length; i++) {
		tagChk = 'adTag'+i;
		calls='';
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
	for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
		if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
			{
				calls+=document.getElementById(tagChk).getElementsByTagName("*")[j].src + '\n\n'
				//alert(document.getElementById(tagChk).getElementsByTagName("*")[j].src);
			}
	};
	alert(calls);
};
}
};


/* finalStr = finalStr + "<div style='float:left;margin:10px;border:1px solid black' id='adtest'>
<frame style='border-width:0px;' frameborder='0'>"
 + previewString + 
"</frame></div>";*/