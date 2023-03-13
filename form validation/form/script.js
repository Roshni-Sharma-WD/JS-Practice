function validateform() {


    var gender = document.contactform.gender.value;
    var hobbies = [];

    var checkboxes = document.getElementsByName("hobbies[]");


    //for name
    var name = document.contactform.name.value;
    console.log(name);
    if (name == "") {
        document.getElementById("nameErr").innerHTML = "field required"
        // document.getElementById(error).style.color = "red"
    } else {
        document.getElementById("nameErr").innerHTML = ""
    }


    //for email 
    var email = document.contactform.email.value;
    console.log(email);
    if (email.match('@') && email.match('.com')) {
    }
    else {
        document.getElementById("emailErr").innerHTML = "@ and .com required"
    }


    // for number 
    var mobile = document.contactform.mobile.value;
    console.log(number);
    if (mobile.length = 10) {
        document.getElementById("mobileErr").innerHTML = "numbers required"
        // document.getElementById(error).style.color = "red"
    } else {
        document.getElementById("mobileErr").innerHTML = ""
    }


    // for country 
    var country = document.contactform.country.value;
    console.log(country);
    if (country == "")



}

