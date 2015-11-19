
if(window.opener) {
         previewString = unescape(window.opener.document.getElementById('previewText').value);
         countValStr = window.opener.document.getElementById('adCount').value;
}
else {
         previewString = unescape(window.parent.document.getElementById('previewText').value);
         countValStr = window.parent.document.getElementById('adCount').value;
}

tags= previewString.split('!@#$%');
alert(tags.length);
var finalStr = "";

for(var i=0;i<tags.length;i++) {

finalStr = "<div id='adTag" + i + "' style='display:block;margin-top:30px;background-color:#c0c0c0;padding:20px;border-radius:15px'><frame>" + tags[i] + "</frame><textarea style='float:right;max-height:300px;max-width:500px;height:300px;width:500px'>"+ tags[i] +"</textarea><h4 style='margin-bottom:10px;margin-left:10px;'>Call Flow :</h4><div style='margin-top:5px;height:200px;width:1300px;margin-left:10px;overflow:scroll;background-color:#efefef;border:1px solid #8585e0;border-radius:10px' id='adTagdiv"+ i +"'></div></div>" 
alert(finalStr);
document.write(finalStr);

}


window.onload = function(){
	//alert("Hi");

/*for (var i = 0; i < document.getElementById('adtest').getElementsByTagName("*").length; i++) {
	if(document.getElementById('adtest').getElementsByTagName("*")[i].src != null && document.getElementById('adtest').getElementsByTagName("*")[i].src != '')
	alert(document.getElementById('adtest').getElementsByTagName("*")[i].src + '\n\n')
}*/

	for (var i = 0; i < tags.length; i++) {	
		tagChk = 'adTag'+i;
		calls='<ul style="margin-top:5px">';
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
			for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
				if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
					{
						
						calls+='<li>'+decodeURI(document.getElementById(tagChk).getElementsByTagName("*")[j].src)+'</li><br>'
				//alert(document.getElementById(tagChk).getElementsByTagName("*")[j].src);
					}
			};
			calls+='</ul>';
			document.getElementById('adTagdiv'+i).innerHTML=calls;
			//alert(calls);
		};
	}
};


/* finalStr = finalStr + "<div style='float:left;margin:10px;border:1px solid black' id='adtest'>
<frame style='border-width:0px;' frameborder='0'>"
 + previewString + 
"</frame></div>";*/