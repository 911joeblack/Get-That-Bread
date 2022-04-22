function myfunc()
	{
		if(document.getElementById("Lname").value.length == 0	
			||document.getElementById("fname").value.length == 0
			||document.getElementById("email").value.length == 0)
			{alert("please fill all blank")}

		var name = document.getElementById("fname").value;
		var list_of_name = ["zhihui","Alex","issac","Shivam","Joel"]

		if(name!=list_of_name[0]&&name!=list_of_name[1]&&name!=list_of_name[2])
		{document.getElementById("demo").innerHTML="welcome "+name;}
		else{document.getElementById("demo").innerHTML="welcome back "+name;}
	}

	var dt = new Date();
	document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) + "." + 
        (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) + " " + 	
        	(("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));