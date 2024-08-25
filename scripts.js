(function(){
    emailjs.init({
        publicKey: '1mmCs7XGffPMoDo1m',
    });
})();

function submitPrayer(){
    //runs validation and submits form contents to church email
    let namePrayerValid = namePrayerValidation();
    let subjectPrayerValid = subjectPrayerValidation();
    let messagePrayerValid = messagePrayerValidation();
    if(namePrayerValid && subjectPrayerValid && messagePrayerValid){
        let form = document.querySelector("#prayerForm");
        emailjs.sendForm('service_oiyymrv', 'prayer_form', form).then(() =>{
            console.log('SUCCESS!');
            document.querySelector("#submitPrayerClicked").innerHTML = "Thank you for your prayer request!";
            document.querySelector("#prayerForm").reset();
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
}

function namePrayerValidation(){
    //validates the name is filled
    let validForm = true;
    let displayName = document.querySelector("#user_namePrayer").value;
        if(displayName == ""){
            validForm = false;
            document.querySelector("#namePrayerError").innerHTML = "Name cannot be blank.";
        }
        return validForm;
}

function subjectPrayerValidation(){
    //validates the prayer subject is filled
    let validForm = true;
    let displaySubject = document.querySelector("#subjectPrayer").value;
        if(displaySubject == ""){
            validForm = false;
            document.querySelector("#subjectPrayerError").innerHTML = "Subject cannot be blank.";
        }
        return validForm;
}

function messagePrayerValidation(){
    //validates the prayer message is filled
    let validForm = true;
    let displayMessage = document.querySelector("#messagePrayer").value;
        if(displayMessage == ""){
            validForm = false;
            document.querySelector("#messagePrayerError").innerHTML = "Message cannot be blank.";
        }
        return validForm;
}

function clearNamePrayerError(){
    //clears the name error message
    document.querySelector("#namePrayerError").innerHTML = "";
}

function clearSubjectPrayerError(){
    //clears the subject prayer error message
    document.querySelector("#subjectPrayerError").innerHTML = "";
}

function clearMessagePrayerError(){
    //clears the message prayer error message
    document.querySelector("#messagePrayerError").innerHTML = "";
}

function resetPrayerErrors(){
    //clears the error messages when clicking reset
    document.querySelector("#namePrayerError").innerHTML = "";
    document.querySelector("#subjectPrayerError").innerHTML = "";
    document.querySelector("#messagePrayerError").innerHTML = "";
    document.querySelector("#submitPrayerClicked").innerHTML = "";
}




function submitContact(){
    //runs validation and submits form contents to church email
    let nameValid = nameValidation();
    let emailValid = emailValidation();
    let subjectValid = subjectValidation();
    let messageValid = messageValidation();
    if(nameValid && emailValid && subjectValid && messageValid){
        let form = document.querySelector("#contactForm");
        emailjs.sendForm('service_595nd9w', 'contact_form', form).then(() =>{
            console.log('SUCCESS!');
            document.querySelector("#submitClicked").innerHTML = "Thank you for contacting us!";
            document.querySelector("#contactForm").reset();
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
}

function nameValidation(){
    //validates the name is filled
    let validForm = true;
    let displayName = document.querySelector("#user_name").value;
        if(displayName == ""){
            validForm = false;
            document.querySelector("#nameError").innerHTML = "Name cannot be blank.";
        }
        return validForm;
}

function emailValidation(){
    //validates the email is a valid format and is filled
    let validForm = true;
    let displayEmail = document.querySelector("#user_email").value;
        if(displayEmail == ""){
            validForm = false;
            document.querySelector("#emailError").innerHTML = "Email cannot be blank.";
        }
		else{
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(displayEmail)){
				document.querySelector("#user_email").innerHTML = displayEmail;
			}
			else{
				validForm = false;
            	document.querySelector("#emailError").innerHTML = "Email must be formatted correctly.";
			}
		}
        return validForm;
}

function subjectValidation(){
    //validates the subject is filled
    let validForm = true;
    let displaySubject = document.querySelector("#subject").value;
        if(displaySubject == ""){
            validForm = false;
            document.querySelector("#subjectError").innerHTML = "Subject cannot be blank.";
        }
        return validForm;
}

function messageValidation(){
    //validates the message is filled
    let validForm = true;
    let displayMessage = document.querySelector("#message").value;
        if(displayMessage == ""){
            validForm = false;
            document.querySelector("#messageError").innerHTML = "Message cannot be blank.";
        }
        return validForm;
}

function clearNameError(){
    //clears the name error message
    document.querySelector("#nameError").innerHTML = "";
}

function clearEmailError(){
    //clears the email error message
    document.querySelector("#emailError").innerHTML = "";
}

function clearSubjectError(){
    //clears the subject error message
    document.querySelector("#subjectError").innerHTML = "";
}

function clearMessageError(){
    //clears the message error message
    document.querySelector("#messageError").innerHTML = "";
}

function resetErrors(){
    //clears the error messages when clicking reset
    document.querySelector("#nameError").innerHTML = "";
    document.querySelector("#emailError").innerHTML = "";
    document.querySelector("#subjectError").innerHTML = "";
    document.querySelector("#messageError").innerHTML = "";
    document.querySelector("#submitClicked").innerHTML = "";
}


function hoverColorFB(){
    //changes the icon image color darker when moused over
    const image = document.getElementById('fbImg');
    if(image.classList.contains("fbImgClass")){
        image.src = 'images/facebookIconOffWhiteHover.png';
        image.classList.remove("fbImgClass");
    }
    else {
        image.src = 'images/facebookIconOffWhite.png';
        image.classList.add("fbImgClass");
    }
}

function hoverColorYT(){
    //changes the icon image color darker when moused over
    const image = document.getElementById('ytImg');
    if(image.classList.contains("ytImgClass")){
        image.src = 'images/youtubeIconOffWhiteHover.png';
        image.classList.remove("ytImgClass");
    }
    else {
        image.src = 'images/youtubeIconOffWhite.png';
        image.classList.add("ytImgClass");
    }
}

function hoverColorIG(){
    //changes the icon image color darker when moused over
    const image = document.getElementById('igImg');
    if(image.classList.contains("igImgClass")){
        image.src = 'images/instagramIconOffWhiteHover.png';
        image.classList.remove("igImgClass");
    }
    else {
        image.src = 'images/instagramIconOffWhite.png';
        image.classList.add("igImgClass");
    }
}