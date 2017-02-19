window.onload = function(){
	document.getElementsByTagName("input")[7].indeterminate = true;
	document.getElementsByTagName("input")[8].indeterminate = true;
	document.getElementsByTagName("input")[9].indeterminate = true;

var selects = $('select[name^=JSLibs]');
	//console.log(selects);
	for (var i = 0; i < selects.length; i++) {
		selects[i].innerHTML = TEMPLATE;
	}
};
function editContent(x) {
   var content = prompt("Please enter your " + x + " ");


   if (content != null && content != '' && '' != content.replace(/\s/gim, '')) {
       document.getElementById(x).innerHTML = content;
    }
};

function changeMedia(event) {
	var link = document.getElementById('link')
	link.setAttribute("href", "content/styles/" + event.target.value + ".css")

	//var ico =document.getElementById('icon')
	//icon.setAttribute("href", "content/icons/" + event.target.value + ".jpg")
}
