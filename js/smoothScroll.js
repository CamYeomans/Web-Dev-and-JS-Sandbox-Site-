
function scollSmooth(id) {
	var myId = document.getElementById(id); 
	myId.scrollIntoView({behavior: "smooth"});
}

function toggle(){
$(document).ready(function(){
        $(".navCollapse").animate({
			width: 'toggle'
        });
});
}


function hide(){
$(document).ready(function(){
        $(".navCollapse").animate({
			width: 'hide'
        });
});
}








