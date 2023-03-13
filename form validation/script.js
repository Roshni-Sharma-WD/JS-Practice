function validateform() {


    var name = document.contactform.name.value;
    
    var email = document.contactform.email.value;
    var mobile = document.contactform.mobile.value;
    var country = document.contactform.country.value;
    var gender = document.contactform.gender.value;
    var hobbies = [];

    console.log(name);
    console.log(email);
    console.log(mobile);

    var checkboxes = document.getElementsByName("hobbies[]");
}

