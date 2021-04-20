function validate(lat, long) {
    // TODO - write custom validation logic to validate the longitude and latitude
    // values. The latitude value must be a number between -90 and 90; the
    // longitude value must be a number between -180 and 180. If either/both are
    // invalid, show the appropriate error message in the form, and stop the
    // form from being submitted. If both values are valid, allow the form to be
    // submitted.
    //let lat = 0;
    //let lng = 0;
    let errorMessage = new Error(" must be a valid number between -90 and 90");
    let errorMessageLong = new Error("must be a valid number between -180 and 180");
    if (lat >= -90 && lat <= 90 && long >= -180 && long <= 180){

       if (document.getElementById("functionToWork") !=  null) {
           document.getElementById("functionToWork").submit();
       }
    }
    else{
       if (document.getElementById("lat_one") != null) {
        if (lat < -90 && lat > 90) {
            throw errorMessage;
        }
    }
    if (document.getElementById("long_one") != null) {
        if (long < -180 && long > 180) {
            throw errorMessageLong;
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
