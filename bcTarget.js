
function showInner(n1,n2){

		if (document.readyState === "complete") 
			{ 
				//alert(n1+"  "+n2);
			}
		else
			{
				alert("Wait till page is loaded !!!");
			}
		
	}

function mailLog(n1,n2){

		if (document.readyState === "complete") 
			{ 
				//alert(n1+"  "+n2);
				 var conId = ''
				 var bodyToSend = '\n~~~~~~~~~~~~~~~~~~~~~~ Logs ~~~~~~~~~~~~~~~~~~~\n\n'
				 					+ escape(document.getElementById('myText').value)
				 var link = "mailto:&body=" + ;

	             window.location.href = link;
			}
		else
			{
				alert("Wait till page is loaded !!!");
			}
	}


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
		//tmpTag+=tags[i]+'\n'
		if(j==0)
			tmpTag +="<div id='adTag"+ i +"sub"+ j +"' style='margin-top:20px;display:inline;border:1px solid #000000;float:left'>" + tags[i] + "</div><textarea id='adTagTxt"+ i +"' style='float:right;display:block;max-height:300px;max-width:500px;height:300px;width:500px;border:2px solid #8585ff;'></textarea><h4 style='float:left;clear:both;margin-left:10px;margin-bottom:10px;margin-top:20px;display:table-cell'>Call Flow :</h4><div style='clear:both;margin-top:35px;height:300px;width:1300px;margin-left:0px;overflow-y: scroll; overflow-x:hidden;background-color:#efefef;border:2px solid #8585ff;border-radius:10px;word-wrap: break-word;' id='adTagdiv"+ i + "sub" + j +"'></div><div style='margin-left:10px;margin-top:10px'><input type='button' style='margin-right:20px' id='ainner"+i+"sub"+j+"' value='Show innerHTML' onclick='showInner("+i+","+j+")'></input> <input type='button' style='' id='amail"+i+"sub"+j+"' value='Mail Log' onclick='mailLog("+i+","+j+")'></input></div>"
		else
			tmpTag +="<hr style='margin-top:20px'><hr><div id='adTag"+ i +"sub"+ j +"' style='margin-top:20px;border:1px solid #000000;float:left;'>" + tags[i] + "</div><h4 style='float:left;clear:right;margin-left:10px;margin-bottom:10px;margin-top:20px;display:table-cell;clear:both'>Call Flow :</h4><div style='margin-top:25px;height:300px;width:1300px;margin-left:0px;overflow-y: scroll; overflow-x:hidden;background-color:#efefef;border:2px solid #8585ff;border-radius:10px;clear:both;word-wrap: break-word;' id='adTagdiv"+ i + "sub" + j +"'></div><div style='margin-left:10px;margin-top:10px'><input type='button' style='margin-right:20px' id='ainner"+i+"sub"+j+"' value='Show innerHTML' onclick='showInner("+i+","+j+")'></input> <input type='button' style='' id='amail"+i+"sub"+j+"' value='Mail Log' onclick='mailLog("+i+","+j+")'></input></div>"
		};
//alert(tmpTag);
	finalStr = "<div id='adTag" + i + "' style='margin-top:30px;background-color:#c0c0c0;padding:20px;border-radius:15px;'><h2>AdTag Number : "+ (i+1) +"</h2>" + tmpTag + "</div>" 
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
		
		for (var k = 0; k < countValStr; k++) {
			
		flag = 0;
		tagChk = 'adTag'+i+'sub'+k;
		
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
			calls='<ul style="margin-top:5px">';
			for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
				if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
					{
						flag=1;			
						//alert(document.getElementById(tagChk).getElementsByTagName("*")[j].src);
						try{ 
							calls+='<li>'+decodeURI(document.getElementById(tagChk).getElementsByTagName("*")[j].src)+'</li><br>'
						}
						
						catch(err){
							calls+='<li>'+document.getElementById(tagChk).getElementsByTagName("*")[j].src+'</li><br>'	
						}
				//alert(document.getElementById(tagChk).getElementsByTagName("*")[j].src);
					}
			};
			calls+='</ul>';
			
			//alert(calls);
		};

		if(flag==0)
			calls='<ul style="margin-top:5px"><li>No Calls/Invalid Tag</li></ul>';
		//window.prompt("Copy to clipboard: Ctrl+C, Enter", calls);
		if(document.getElementById('adTagdiv'+i+'sub'+k) != null)
				document.getElementById('adTagdiv'+i+'sub'+k).innerHTML=calls;
		}

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

