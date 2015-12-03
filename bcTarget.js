
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(window.opener) {
         previewString = unescape(window.opener.document.getElementById('previewText').value);
         countValStr = window.opener.document.getElementById('adCount').value;
}
else {
         previewString = unescape(window.parent.document.getElementById('previewText').value);
         countValStr = window.parent.document.getElementById('adCount').value;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

tags= previewString.split('!@#$%');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

for(var i=0;i<tags.length;i++) {
	var finalStr = "";

	tmpTag='';
	for (var j = 0; j < countValStr; j++) {

		if(j==0)
			tmpTag +="<div id='adTag"+ i +"sub"+ j +"' style='margin-top:20px;display:inline;border:1px solid #000000;float:left'>" 
					+ tags[i] 
					+ "</div><textarea id='adTagTxt"+ i +"' style='float:right;display:block;max-height:300px;max-width:500px;height:300px;width:500px;border:2px solid #8585ff;'></textarea><h4 style='float:left;clear:both;margin-left:10px;margin-bottom:10px;margin-top:20px;display:table-cell'>Call Flow :</h4><div style='clear:both;margin-top:35px;height:300px;width:1300px;margin-left:0px;overflow-y: scroll; overflow-x:hidden;background-color:#efefef;border:2px solid #8585ff;border-radius:10px;word-wrap: break-word;' id='adTagdiv"+ i + "sub" + j +"'></div><div style='margin-left:10px;margin-top:10px'><input type='button' style='margin-right:20px;width:200px' id='ainner"+i+"sub"+j+"' value='Show innerHTML' onclick='showInner("+i+","+j+")'></input> <input type='button' style='width:200px' id='amail"+i+"sub"+j+"' value='Mail Log' onclick='mailLog("+i+","+j+")'></input></div>"
		else
			tmpTag +="<hr style='margin-top:20px'><hr><div id='adTag"+ i +"sub"+ j +"' style='margin-top:20px;border:1px solid #000000;float:left;'>" 
					+ tags[i] 
					+ "</div><h4 style='float:left;clear:right;margin-left:10px;margin-bottom:10px;margin-top:20px;display:table-cell;clear:both'>Call Flow :</h4><div style='margin-top:25px;height:300px;width:1300px;margin-left:0px;overflow-y: scroll; overflow-x:hidden;background-color:#efefef;border:2px solid #8585ff;border-radius:10px;clear:both;word-wrap: break-word;' id='adTagdiv"+ i + "sub" + j +"'></div><div style='margin-left:10px;margin-top:10px'><input type='button' style='margin-right:20px;width:200px' id='ainner"+i+"sub"+j+"' value='Show innerHTML' onclick='showInner("+i+","+j+")'></input> <input type='button' style='width:200px' id='amail"+i+"sub"+j+"' value='Mail Log' onclick='mailLog("+i+","+j+")'></input></div>"
		};

	finalStr = "<div id='adTag" + i + "' style='margin-top:30px;background-color:#c0c0c0;padding:20px;border-radius:15px;'><h2>AdTag Number : "+ (i+1) +"</h2>" + tmpTag + "</div>" 

	document.write(finalStr);

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ On Load ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.onload = function(){

	for (var i = 0; i < tags.length; i++) {			
		for (var k = 0; k < countValStr; k++) {
		
		if(document.getElementById('adTagdiv'+i+'sub'+k) != null)
				document.getElementById('adTagdiv'+i+'sub'+k).innerHTML=getLogsList(i,k);
		
		}

		if(document.getElementById('adTagTxt'+i) != null)
				document.getElementById('adTagTxt'+i).value = tags[i];
	}
};

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ On error mail ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
    document.getElementById('mail').href='mailto:?to=&cc=akshay.dagade@pubmatic.com&subject=BCProactives%20ErrorLog&body=' + encodeURIComponent(errorLog);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getLogs(tg,lp)
	{

		var tmpFlag = 0;
		tagChk = 'adTag'+tg+'sub'+lp;
		
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
			
			var logsRet='';
			for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
				if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
					{
						tmpFlag=1;			
				
						try{ 
							logsRet+='\n\n'+decodeURI(document.getElementById(tagChk).getElementsByTagName("*")[j].src);	
							}
						
						catch(err){
							logsRet+='\n\n'+document.getElementById(tagChk).getElementsByTagName("*")[j].src;	
						}
				
					}
			};
			
		};

		if(tmpFlag==0)
			logsRet='\n\nNo Calls/Invalid Tag';
		
		 	return logsRet;
	}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
function getLogsList(tg,lp)
{


		var tmpFlag = 0;
		tagChk = 'adTag'+tg+'sub'+lp;
		var listLog='';
		
		if(document.getElementById(tagChk).getElementsByTagName("*").length > 0){
			listLog='<ul style="margin-top:5px">';
			for (var j = 0; j < document.getElementById(tagChk).getElementsByTagName("*").length; j++) {
		
				if(document.getElementById(tagChk).getElementsByTagName("*")[j].src != null && document.getElementById(tagChk).getElementsByTagName("*")[j].src != '')
					{
						tmpFlag=1;			
			
						try{ 
							listLog+='<li>'+decodeURI(document.getElementById(tagChk).getElementsByTagName("*")[j].src)+'</li><br>'
						}
						
						catch(err){
							listLog+='<li>'+document.getElementById(tagChk).getElementsByTagName("*")[j].src+'</li><br>'	
						}
			
					}
			};
			listLog+='</ul>';
			
		};

		if(tmpFlag==0)
			return '<ul style="margin-top:5px"><li>No Calls/Invalid Tag</li></ul>';

		return listLog;
	
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function showInner(n1,n2){

		if (document.readyState === "complete") 
			{ 
				//alert(n1+"  "+n2);
				if (document.getElementById('ainner'+n1+'sub'+n2).value=='Show Logs'){

					document.getElementById('adTagdiv'+n1+'sub'+n2).style.overflowY= "scroll";
					document.getElementById('ainner'+n1+'sub'+n2).value='Show innerHTML';
					document.getElementById('adTagdiv'+n1+'sub'+n2).innerHTML='';
					document.getElementById('adTagdiv'+n1+'sub'+n2).innerHTML=getLogsList(n1,n2);

				}
				
				else{
					
					document.getElementById('adTagdiv'+n1+'sub'+n2).style.overflowY= "hidden";
					document.getElementById('ainner'+n1+'sub'+n2).value='Show Logs';
					document.getElementById('adTagdiv'+n1+'sub'+n2).innerHTML='';
					document.getElementById('adTagdiv'+n1+'sub'+n2).innerHTML='<textarea style="margin-left:10px;margin-top:10px;width:1280px;height:280px;max-width:1280px;max-height:280px">'
																				 + document.getElementById('adTag'+n1+'sub'+n2).innerHTML.replace(/\</g,"\n\<")
																				 + '</textarea>';

				}
			}
		else
			{
				alert("Wait till the page is loaded !!!");
			}
		
	}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function mailLog(n1,n2){

		if (document.readyState === "complete") 
			{ 
				
				 var mailSubject = 'BCProactives Logs'
				 var bodyToSend = 	'\n\n~~~~~~~~~~~~~~~~~~~~~~ AdTag ~~~~~~~~~~~~~~~~~~~\n\n'
				 				   + tags[n1]
				 			   	   +'\n\n~~~~~~~~~~~~~~~~~~~~~~ Logs ~~~~~~~~~~~~~~~~~~~~\n'
				 			   	   + getLogs(n1,n2)
				 			   	   + '\n\n~~~~~~~~~~~~~~~~~~ innerHTML ~~~~~~~~~~~~~~~~~~\n\n'
				 			   	   + document.getElementById('adTag'+n1+'sub'+n2).innerHTML.replace(/\</g,"\n\<") 
				 			   	   + '\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n'
				 				   

				 var link = "mailto:?to=&cc=akshay.dagade@pubmatic.com&subject="+ encodeURIComponent(mailSubject) +"&body=" + encodeURIComponent(bodyToSend);

	             window.location.href = link;
			}
		else
			{
				alert("Wait till the page is loaded !!!");
			}
	}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~