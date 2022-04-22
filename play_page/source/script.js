var count = 0;
var btn = document.getElementById("btn");
var disp = document.getElementById("display");
var fa_count = 0;
var element3 = document.getElementsByClassName('ask_fa');

const dow = document.querySelector('#down')

function dothis() {
		count++;
		disp.innerHTML = count;
		if(count >= 1){document.getElementById("attc").innerHTML="achievement accessed: beginner";}
		if(count >= 20){document.getElementById("attc").innerHTML="achievement accessed: forerunner";}
		if(count >=50){
			console.log(element3);
			element3[0].style.display = 'block';}
		if(count >= 100){document.getElementById("attc").innerHTML="achievement accessed: never hesitate";}
}

function continuousIncrement()
{
		count++;
		disp.innerHTML = count;
		fa_count++;

		timer = setTimeout(continuousIncrement,300);
		if(fa_count>=50){document.getElementById("f_a").innerHTML="congrats! you made 50 cookies in factory";}
		if(fa_count>=100){document.getElementById("f_a").innerHTML="congrats! you made 100 cookies in factory";}
}

function timeoutClear() 
{
	clearTimeout(timer);
}

    dow.addEventListener('mousedown',continuousIncrement);
    dow.addEventListener('mouseup', timeoutClear);
    dow.addEventListener('mouseleave', timeoutClear);


reset.onclick=function()
{
    	count= 0;
    	fa_count=0;
    	disp.innerHTML = count;
	    document.getElementById("attc").innerHTML=" ";
	    document.getElementById("f_a").innerHTML=" ";
	    var element = document.getElementsByClassName('fac');
		element[0].style.display = 'none';
		element = document.getElementsByClassName('tp');
		element[0].style.display = 'block';
}

	function ask1()
	{
		var element1 = document.getElementsByClassName('tp');
		/*console.log(element1);*/
		element1[0].style.display = 'none';

		var element2 = document.getElementsByClassName('fac');
		console.log(element2);
		element2[0].style.display = 'block';

		var element3 = document.getElementsByClassName('ask_fa');
		console.log(element3);
		element3[0].style.display = 'none';

		count=count-50;
		disp.innerHTML = count;
	}