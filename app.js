function LoginCheck(){
    let Name = document.getElementById("Name").value;
    let NamePattern = /^[A-Za-z]{0,20}$/;
    if(Name.match(NamePattern)){
        let span = document.getElementById("errorName");
        span.innerHTML="valid Username";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorName");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
    let Email = document.getElementById("email").value;
    let EmailPattern = /^[a-z 0-9]{0,20}[\.@][a-z]{0,10}[\.][a-z]{3}$/;
    if(Email.match(EmailPattern)){
        let span = document.getElementById("errorEmail");
        span.innerHTML="valid Email ID";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorEmail");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
    let mobileNumber = document.getElementById("mobileNumber").value;
    let mobileNumberPattern = /^[6-9]{1}[0-9]{9}$/;
    if(mobileNumber.match(mobileNumberPattern)){
        let span = document.getElementById("errorNumber");
        span.innerHTML="valid mobile Number";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorNumber");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
    let password =document.getElementById("password").value;
    let passwordPattern = /^[a-zA-Z0-9@#$%^&*_+]{4,6}$/;
    if(password.match(passwordPattern)){
        let span = document.getElementById("errorPassword");
        span.innerHTML="valid Password";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorPassword");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
    let city = document.getElementById("city").value;
    let cityPattern = /^[A-Z]{1}[a-z]{0,10}$/;
    if(city.match(cityPattern)){
        let span = document.getElementById("errorCity");
        span.innerHTML="valid City";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorCity");
        span.innerHTML="Invalid City";
        span.className ="text-danger";
    }
    let pinCode = document.getElementById("PinCode").value;
    let pinCodePattern = /^[0-9]{6}$/;
    if(pinCode.match(pinCodePattern)){
        let span = document.getElementById("errorPincode");
        span.innerHTML="valid Pincode";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorPincode");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
    let ReferralCode  =document.getElementById("ReferralCode").value;
    let ReferralCodePattern = /^[A-Z0-9]{0,9}$/;
    if(ReferralCode.match(ReferralCodePattern)){
        let span = document.getElementById("errorReferral");
        span.innerHTML="valid Referral code";
        span.className ="text-success";
    }
    else{
        let span = document.getElementById("errorReferral");
        span.innerHTML="Invalid Password";
        span.className ="text-danger";
    }
}
