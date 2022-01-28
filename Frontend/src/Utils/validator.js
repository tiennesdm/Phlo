import validator from 'validator';
// import isImageURL from 'image-url-validator';
 /**
  * Validation  
  *  @param {String} type
  *  @param {String} value
  * ************ */
 export const Validation = (type , value) =>{
    switch(type){
        case 'phone' : return validator.isMobilePhone(value);
        case 'email' : return validator.isEmail(value);
        case 'pass' : return validator.isStrongPassword(value);
        // case 'image': return isImageURL(value);
        default : return null ;
    }
}




