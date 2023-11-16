import toast from "react-hot-toast"

// validate login page username

export async function usernameValidate(values){
    const errors=usernameVerify({},values);

    return errors;
}

// validate login page username
export async function passwordValidate(values){
    const errors=passwordVerify({},values);

    return errors;
}

/** validate password */
function passwordVerify(errors={},values){

    const specialChars=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    const numbers=/[0-9]/g

    if(!values.password){
        errors.password=toast.error("password Required...!");
    }
    else if(values.password.includes(" ")){
        errors.password=toast.error('Wrong password...!')
    }
    else if(values.password.length<8){
        errors.password=toast.error("Password must be at least 8 characters")
    }
    else if(!specialChars.test(values.password)){
        errors.password=toast.error("Password must have special charactars")
    }
    else if(!numbers.test(values.password)){
        errors.password=toast.error("Password must have numbers")
    }
    return errors;
}


/** validate username */

function usernameVerify(error={},values){
    if(!values.username){
        error.username=toast.error('Username Required...!')
    }
    else if(values.username.includes(" ")){
        error.username=toast.error('Invalid username...!')
    }
    return error;
}