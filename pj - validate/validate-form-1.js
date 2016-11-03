function validate()
{
	if(document.myForm1.Name.value == "")
	{
		alert("Ban vui long nhap ten!");
		document.myForm1.Name.focus();
		return false;
	}

	if(document.myForm1.Email.value == "")
	{
		alert("Vui long nhap Email cua ban!");
		document.myForm1.Email.focus();
		return false;
	}

	if(validate_mail() == false)
	{
		document.myForm1.Email.focus();
		return false
 
	}

	if(document.myForm1.Zipcode.value == "" || 
	   document.myForm1.Zipcode.value.length != 6 ||
	   isNaN(document.myForm1.Zipcode.value))
	{
		alert("Vui long nhap Zip code!");
		document.myForm1.Zipcode.focus();
		return false;
	}

	if(document.myForm1.Country.value == "0")
	{
		alert("Vui long chon dia chi cua ban!");
		document.myForm1.Country.focus();
		return false;
	}
	return true;
}

function validate_mail()
{
	var email = document.myForm1.Email.value;
 	if(email.search('@') == -1)
 	{
 		alert('Nhap gmail cua ban! - ex: abc@gmail.com');
 		document.myForm1.Email.focus();
 		return false;
 	}
 	else
 	{
 		array_email = email.split('@');

 		if (array_email[1] != "gmail.com")
 		{
 			alert("Nhap: gmail.com");
 			document.myForm1.Email.focus();
 			return false;
 		}
 	 	
 		if(array_email[0].search(' ') != -1)
 		{
 			alert("Email khong chua dau cach!");
 			document.myForm1.Email.focus();
 			return false;
 		}
 
 	}
 	return true;
}
 