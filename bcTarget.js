

if(window.opener) {
         previewString = unescape(window.opener.document.getElementById('previewText').value);
         countValStr = window.opener.document.getElementById('adCount').value;
}
else {
         previewString = unescape(window.parent.document.getElementById('previewText').value);
         countValStr = window.parent.document.getElementById('adCount').value;
}

tags= previewString.split('!@#$%');
//alert(tags.length);
//alert(countValStr);
for(var i=0;i<tags.length;i++) {
	var finalStr = "";

	tmpTag='';
	for (var j = 0; j < countValStr; j++) {
		tmpTag+=tags[i]+'\n'
	};
//alert(tmpTag);
	finalStr = "<div id='adTag" + i + "' style='margin-top:30px;background-color:#c0c0c0;padding:20px;border-radius:15px'><h2>AdTag Number : "+ (i+1) +"</h2>" + tmpTag + "<textarea id='adTagTxt"+ i +"' style='float:right;display:block;max-height:300px;max-width:500px;height:300px;width:500px'></textarea><h4 style='float:right;clear:right;margin-left:10px;margin-bottom:10px;margin-left:0px;display:table-cell'>Call Flow :</h4><div style='clear:right;margin-top:25px;height:200px;width:1300px;margin-left:0px;overflow:scroll;background-color:#efefef;border:1px solid #8585e0;border-radius:10px' id='adTagdiv"+ i +"'></div></div>" 
//alert(finalStr);
	document.write(finalStr);

}


window.onload = function(){
	//alert("Hi");

/*for (var i = 0; i < document.getElementById('adtest').getElementsByTagName("*").length; i++) {
	if(document.getElementById('adtest').getElementsByTagName("*")[i].src != null && document.getElementById('adtest').getElementsByTagName("*")[i].src != '')
	alert(document.getElementById('adtest').getElementsByTagName("*")[i].src + '\n\n')
}*/
	//alert(errorLog+'\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

	for (var i = 0; i < tags.length; i++) {	
		flag = 0;
		tagChk = 'adTag'+i;
		
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
			calls='<ul style="margin-top:5px">';
			for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
				if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
					{
						flag=1;			
						calls+='<li>'+decodeURI(document.getElementById(tagChk).getElementsByTagName("*")[j].src)+'</li><br>'
				//alert(document.getElementById(tagChk).getElementsByTagName("*")[j].src);
					}
			};
			calls+='</ul>';
			
			//alert(calls);
		};

		if(flag==0)
			calls='<ul style="margin-top:5px"><li>No Calls/Invalid Tag</li></ul>';
		//window.prompt("Copy to clipboard: Ctrl+C, Enter", calls);
		if(document.getElementById('adTagdiv'+i) != null)
				document.getElementById('adTagdiv'+i).innerHTML=calls;

		if(document.getElementById('adTagTxt'+i) != null)
				document.getElementById('adTagTxt'+i).value = tags[i];
	}
};


/* finalStr = finalStr + "<div style='float:left;margin:10px;border:1px solid black' id='adtest'>
<frame style='border-width:0px;' frameborder='0'>"
 + previewString + 
"</frame></div>";*/

	errorLog=''
	window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    
    document.getElementById('link').style.display='inline';
    document.getElementById('mail').style.display='inline';
    document.getElementById('link').style.textDecoration='none';
    document.getElementById('mail').style.textDecoration='none';
    document.getElementById('mail').style.marginLeft='1000px';

    
    errorLog+='\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\nError: ' + errorMsg + '\nScript: ' + url + '\nLine: ' + lineNumber
    + '\nColumn: ' + column + '\nStackTrace: ' +  errorObj;

    document.getElementById('link').href='data:text/csv;charset=utf-8,' + encodeURIComponent(errorLog);
    document.getElementById('mail').href='mailto:akshay.dagade@pubmatic.com?subject=BCProactives%20ErrorLog&body=' + encodeURIComponent(errorLog);
}

