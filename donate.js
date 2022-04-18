

function inputValidation()
{
    var donation = document.getElementById("donation").value;

    var fullName = document.getElementById("FullName").value;
    var eMail = document.getElementById("eMail").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var address = document.getElementById("address").value;
    var district = document.getElementById("district").value;
    var country = document.getElementById("country").value;

    var fullName_pattern = /^[A-Za-z\s\.]{10,}$/;
    var eMail_pattern = /^[A-Za-z\d\.\_]+\@[A-Za-z\d\.\-]+\.[A-Za-z]{2,5}$/;
    var mobileNumber_pattern = /^[0][\d]{2}\-[\d]{7}$/; 
    var address_pattern = /^[A-Za-z\d\.\-\/\#\,\s]+$/;
    var district_pattern = /^[A-Za-z\d\s\.\-]{2,15}$/;
    var country_pattern = /^[A-Za-z\s\.\-]{2,15}$/;
    
    
    var cardNumber = document.getElementById("cardNumber").value;
    var expMonth = document.getElementById("expMonth").value;
    var expYear = document.getElementById("expYear").value;
    var cvvNumber = document.getElementById("cvvNumber").value;

    var master = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    var amex = /^3[47][0-9]{13}$/ ;
    var visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
    var disc = /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/;
    var maestro = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/ ;
    var jcb = /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/ ;
    var diners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ ;

    var expMonth_pattern = /^([1-9]|0[1-9]|1[0-2])$/;
    var expYear_pattern =  /^(2022)|(2023)|(2024)|(2025)$/; 
    var cvvNumber_pattern = /^[0-9]{3, 4}$/; 
    

    if(donation=="")
    {
        alert("Please select your donation amount");
        document.getElementById("donation").focus();
        return false;
    }
   
    if(!fullName.match(fullName_pattern))
    {
        if(fullName.length<10)
        {
            alert("Please enter your Full Name");
        }
        else
        {
            alert("Please enter your valid Full Name");
        }
        document.getElementById("FullName").focus();
        return false;
    }

    if(!eMail.match(eMail_pattern))
    {
        alert("Please enter a valid E-Mail");
        document.getElementById("eMail").focus();
        return false;
    }

    if(!mobileNumber.match(mobileNumber_pattern))
    {
        alert("Please enter a valid mobile number ( eg:074-0987654 ) " );
        document.getElementById("mobileNumber").focus();
        return false;
    }

    if(!address.match(address_pattern))
    {
        alert("Please enter a valid address");
        document.getElementById("address").focus();
        return false;
    }

    if(!district.match(district_pattern))
    {
        alert("Please enter a valid District / Province / State");
        document.getElementById("district").focus();
        return false;
    }

    if(!country.match(country_pattern))
    {
        alert("Please enter your Country");
        document.getElementById("country").focus();
        return false;
    }

    if((!cardNumber.match(master)) && (!cardNumber.match(amex)) && (!cardNumber.match(visa)) && (!cardNumber.match(disc)) && (!cardNumber.match(maestro)) && (!cardNumber.match(jcb)) && (!cardNumber.match(diners)))
    {
        alert("Please enter a valid card number");
        document.getElementById("cardNumber").focus();
        return false;
    }


    if(!expMonth.match(expMonth_pattern))
    {
        if(isNaN(expMonth))
        {
          alert("Please enter the month as a number");
        }
        else
        {
            alert(" Please enter a month between 1 and 12 ");
        }
        document.getElementById("expMonth").focus();
        return false;
    }

    
    if(!expYear.match(expYear_pattern))
    {
        alert(" Please enter a year between 2022 and 2025 ");
        document.getElementById("expYear").focus();
        return false;
    }
    

      if(!cvvNumber.match(cvvNumber_pattern))
    {
        if(isNAN(cvvNumber))
        {
            alert("Please enter a 3 0r 4 digit number");
        }
        else{
            alert("Please enter a valid CVV number");
        }
        document.getElementById("cvvNumber").focus();
        return false;
    }

    alert( "Your donation is successfully received. Thank You !");
    
}