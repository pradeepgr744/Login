import toast from "react-hot-toast"

// validate login page username

export async function usernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors;
}

// validate login page username
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

/* validate reset password*/
export async function resetpasswordValidation(values) {
    const errors = passwordVerify({}, values);

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("password not match...!");
    }
}

/*validate register form*/
export async function registerValidation(values) {
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;

}
/* validate Profile page */
export async function profileValidate(values) {
    const errors = emailVerify({}, values);
    return errors;
}

/** validate password */
function passwordVerify(errors = {}, values) {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    const numbers = /[0-9]/g

    if (!values.password) {
        errors.password = toast.error("password Required...!");
    }
    else if (values.password.includes(" ")) {
        errors.password = toast.error('Wrong password...!')
    }
    else if (values.password.length < 8) {
        errors.password = toast.error("Password must be at least 8 characters")
    }
    else if (!specialChars.test(values.password)) {
        errors.password = toast.error("Password must have special charactars")
    }
    else if (!numbers.test(values.password)) {
        errors.password = toast.error("Password must have numbers")
    }
    return errors;
}


/** validate username */

function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required...!')
    }
    else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid username...!')
    }
    return error;
}

/* validate email */
function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email Required...!')
    } else if (values.email.includes(" ")) {
        error.email = toast.error('Wrong email...!')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Invalid email address...!")
    }
    return error;
}