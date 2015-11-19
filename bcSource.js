tagInput = ''

window.onload = function(){

inputRad = document.forms.inputForm.inputType;
inRadval = inputRad.value;

tagRad = document.forms.tagForm.logicType;
tagRadval = tagRad.value;

}


function inputFunc(){

inRadval = inputRad.value;
//alert(inRadval);
if(inRadval == 'file')
	{
		document.getElementById("files").disabled = false;
		document.getElementById("inputTextarea").disabled = true;
	}
if(inRadval == 'text')
	{
		document.getElementById("files").disabled = true;
		document.getElementById("inputTextarea").disabled = false;
	}
}

function tagFunc(){

tagRadval = tagRad.value;
//alert(tagRadval);
if(tagRadval == 'regex')
	{
		document.getElementById("splitVal").disabled = true;
		if(tagInput != '')
			handleTagInput(tagInput);
			
	}
if(tagRadval == 'split')
	{
		document.getElementById("splitVal").disabled = false;
		if(tagInput != '')
			handleTagInput(tagInput);
	}

}


function analyzeCreative(){

	var tmpCnt = document.getElementById("adCount").value;
	var tmpCnt2 = parseInt(tmpCnt);
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


}

function handleFile(){

	selectedFile = document.getElementById("files").files[0];
     var fileType = /text.*/;

     if(selectedFile.type.match(fileType))
     {
     	
        reader = new FileReader();      	
     	  reader.onload = function(){

     	  	tagInput=reader.result;
     	  	if(tagInput!='')
     		 	handleTagInput(tagInput);
     	 	else
     			alert("File is Empty."); 		
     	}
     	 reader.readAsText(selectedFile);
     }
     else
       	alert("Text File Not Selected.");
}

function handleTagInput(tagIn){

	if(tagRadval=='regex')
		{
			alert("Reg");
		}
	else if(tagRadval=='split')
		{
			alert("Split");
		}

}
