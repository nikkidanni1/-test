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
