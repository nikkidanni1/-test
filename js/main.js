;function openbox(id1, id2, id3){
    display = document.getElementById(id1).style.display;

    if(display=='none') {
       document.getElementById(id1).style.display='block';
	   document.getElementById(id2).style.display='none';
	   document.getElementById(id3).style.display='block';
    } else{
       document.getElementById(id1).style.display='none';
	   document.getElementById(id2).style.display='block';
	   document.getElementById(id3).style.display='none';
    }
};
function check(checkbox, id2) {
	var checked = checkbox.checked;
	if(checked) {
		document.getElementById(id2).style.backgroundImage = "url('icon/Group 50.svg')";
		checkbox.checked = true;
		document.getElementById(id2).parentNode.style.color = "#989898";
	} else {
		document.getElementById(id2).style.backgroundImage = "url('icon/Rectangle 20.svg')";
		checkbox.checked = false;
		document.getElementById(id2).parentNode.style.color = "#DEDDDD";
	}
}