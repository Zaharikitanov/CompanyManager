const cyrillicPattern = /^[\u0400-\u04FF]+$/;
// eslint-disable-next-line
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; //this is covering 8 symbols min, capital letter, numbers and special characters as -_
const passwordPattern = /^[a-z0-9]{6,15}$/i;

const regexTester = (regexPattern, textForTest) => {

    const pattern = new RegExp(regexPattern)

    if (pattern.test(textForTest)) {
        return true;
    }
    return false;
}

const CheckMinFieldLength = (setLength, fieldValue) => {
    if (fieldValue.length >= setLength){
        return true;
    }
    return false;
}

export const ValidateName = (length, text) => {

    if (!CheckMinFieldLength(length, text)){
        return `Броят на символите трябва да е минимум ${length}`;
    }

    if (!regexTester(cyrillicPattern, text)){
        return "Символите трябва да са на кирилица";
    }

    return "";
}

export const ValidateEmail = (email) => {
    if(!regexTester(emailPattern, email)){
        return "Невалиден имейл адрес";
    }

    return "";
}

export const ValidatePassword = (password) => {
    
    if(!regexTester(passwordPattern, password)){
        return `Паролата трябва да има: \n
        - миниум 6 символа, букви и цифри, \n
        Пример: pass${Math.random().toFixed(2)*100}`;
    }

    return "";
}
