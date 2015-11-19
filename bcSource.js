tagInput = ''
fileInput = ''
window.totaltagcount=0;
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

window.onload = function(){

inputRad = document.forms.inputForm.inputType;
inRadval = inputRad.value;

tagRad = document.forms.tagForm.logicType;
tagRadval = tagRad.value;

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function inputFunc(){

inRadval = inputRad.value;
//alert(inRadval);
if(inRadval == 'file')
	{
		document.getElementById("files").disabled = false;
		document.getElementById("inputTextarea").disabled = true;

		tagInput=fileInput;
		if(tagInput != '')
			handleTagInput(tagInput);
		else
			{
				document.getElementById("adCountText").innerHTML='No Input!!!'
 				window.totaltagcount = 0;
 			}
	}
if(inRadval == 'text')
	{
		document.getElementById("files").disabled = true;
		document.getElementById("inputTextarea").disabled = false;

		tagInput=document.getElementById("inputTextarea").value;
		if(tagInput != '')
			handleTagInput(tagInput);
		else
			{
				document.getElementById("adCountText").innerHTML='No Input!!!'
				window.totaltagcount = 0;
			}
	}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function tagFunc(){

tagRadval = tagRad.value;
//alert(tagRadval);
if(tagRadval == 'regex')
	{
		document.getElementById("splitVal").disabled = true;
		if(inRadval == 'text')
			tagInput=document.getElementById("inputTextarea").value;
		else if(inRadval == 'file')
			tagInput=fileInput;

		if(tagInput != '')
			handleTagInput(tagInput);
		else
			{
				document.getElementById("adCountText").innerHTML='No Input!!!'
 				window.totaltagcount = 0;
 			}
			
	}
if(tagRadval == 'split')
	{
		document.getElementById("splitVal").disabled = false;
		if(inRadval == 'text')
			tagInput=document.getElementById("inputTextarea").value;
		else if(inRadval == 'file')
			tagInput=fileInput;

		if(tagInput != '')
			handleTagInput(tagInput);
		else
			{
				document.getElementById("adCountText").innerHTML='No Input!!!'
 				window.totaltagcount = 0;
 			}
	}

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function analyzeCreative(){

	var tmpCnt = document.getElementById("adCount").value;
	var tmpCnt2 = parseInt(tmpCnt);

	if(window.totaltagcount==0)
		{
			alert("No AdTags detected, Can't Proceed!!!");
			return 0;
		}

	if(tmpCnt!=tmpCnt2 || tmpCnt2<1)
		{
			document.getElementById('countMsg').style.display='Inline';
			document.getElementById('countMsg').style.color='Red';
			return 0;
		}
	else if(tmpCnt2 >= 1)
		{
			document.getElementById('countMsg').style.display='None';
		}

		document.getElementById('previewText').innerHTML='';

		for (var i = 0; i < tags.length; i++) {
			//alert(tags[i]);
			document.getElementById('previewText').innerHTML +=escape(unescape(escape(tags[i])));
			if(i != tags.length-1)
				document.getElementById('previewText').innerHTML += '\n!@#$%\n';
		};

		if(typeof newWindow == "undefined")
                 newWindow = "";
         newWindow = window.open("proactiveTarget.html","Analyze_Creative");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleFile(){

	selectedFile = document.getElementById("files").files[0];
     var fileType = /text.*/;

     if(selectedFile.type.match(fileType))
     {
     	
        reader = new FileReader();      	
     	  reader.onload = function(){
     	  	fileInput=reader.result
     	  	tagInput=reader.result;
     	  	if(tagInput!='')
     		 	handleTagInput(tagInput);
     	 	else
     			{
     				alert("File is Empty."); 		
     				window.totaltagcount = 0;
     			}
     	}
     	 reader.readAsText(selectedFile);
     }
     else
       	alert("Text File Not Selected.");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleText(){
	//alert("Change");
	tagInput=document.getElementById("inputTextarea").value;
	//alert(tagInput);
		if(tagInput!='')
     		 handleTagInput(tagInput);
     	else
			{
				document.getElementById("adCountText").innerHTML='No Input!!!'
 				window.totaltagcount = 0;
 			}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function splitValFunc(element){

	if(tagInput != '')
		handleTagInput(tagInput);
	else
		{
			document.getElementById("adCountText").innerHTML='No Input!!!'
 			window.totaltagcount = 0;
 		}
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function handleTagInput(tagIn){

	if(tagRadval=='regex')
		{
			//alert(tagIn);
			tags = tagIn.match(/<[\s]*script[\s]*[^>]*>[\s]*var[^<]*(<\/script>)[\s]*<script[^>]*[\s]*>[\s]*(<\/script>)*/g);
			if(tags!= null)
				{
					document.getElementById("adCountText").innerHTML = "Number of Ad Tags detected : " + tags.length;
					window.totaltagcount = tags.length;
				}
			else
				{
					document.getElementById("adCountText").innerHTML = "Number of Ad Tags detected : 0";
					window.totaltagcount = 0;
				}
  			
		}
	else if(tagRadval=='split')
		{
			//alert("Split");
			if(document.getElementById("splitVal").value=='')
				{
					alert("Enter value to Split by.")
					document.getElementById("adCountText").innerHTML = "Number of Ad Tags detected : 0";
					window.totaltagcount = 0;
				}
			else
				{
					tags=tagIn.split(document.getElementById("splitVal").value);
					if(tags!= null)
						{
							document.getElementById("adCountText").innerHTML = "Number of Ad Tags detected : " + tags.length;
							window.totaltagcount = tags.length;
						}
					else
						{
							document.getElementById("adCountText").innerHTML = "Number of Ad Tags detected : 0";
							window.totaltagcount = 0;
						}
				}	
			
		}

}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!! code to stop default behaviour, ie. stop reloading the page when Enter is pressed in TestBox !!!!!//
var nav = window.Event ? true : false;
if (nav) {
   window.captureEvents(Event.KEYDOWN);
   window.onkeydown = NetscapeEventHandler_KeyDown;
} else {
   document.onkeydown = MicrosoftEventHandler_KeyDown;
}

function NetscapeEventHandler_KeyDown(e) {
  if (e.which == 13 && e.target.type != 'textarea' && e.target.type != 'submit') { return false; }
  return true;
}

function MicrosoftEventHandler_KeyDown() {
  if (event.keyCode == 13 && event.srcElement.type != 'textarea' && event.srcElement.type != 'submit')
    return false;
  return true;
}