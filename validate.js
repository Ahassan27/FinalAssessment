function validate(event) {
    // TODO - write custom validation logic to validate the longitude and latitude
    // values. The latitude value must be a number between -90 and 90; the
    // longitude value must be a number between -180 and 180. If either/both are
    // invalid, show the appropriate error message in the form, and stop the
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.
    //let lat = 0;
    //let lng = 0;
    if (event >= -90 && event<= 90 && event >= -180 && event <= 180){

       if (document.getElementById("functionToWork") !=  null) {
           document.getElementById("functionToWork").submit();
       }
    }
    else{
       if (document.getElementById("lat_one") != null) {
        if (event < -90 && event > 90) {
            throw "must be a valid number between -90 and 90";
        }
    }
    if (document.getElementById("long_one") != null) {
        if (event < -180 && event > 180) {
            throw "must be a valid number between -180 and 180";
        }
    }
}


    //console.log('TODO - validate the longitude, latitude values before submitting');
}
console.log(validate())

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
    const form = document.querySelector('form');
    form.onsubmit = validate;
};
