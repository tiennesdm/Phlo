const bcrypt = require("bcryptjs");

/**
 * convertPassToHash
 * @param {String} password
 * 
 * ** */
const convertPassToHash = async(password) =>{
    try{
        let encrypt = bcrypt.hash(password, 10).then((hash)=>{
            return hash;
        });
       return Promise.resolve(encrypt);
    }catch(err){
       return Promise.reject();
    }

}

/**
 * compare password
 * @param {String} requestPassword
 * @param {String} userPassword
 * 
 * ** */

 const comparePassword = async(requestPassword, userPassword) =>{
   return  bcrypt.compare(requestPassword, userPassword);
 }

module.exports ={
    convertPassToHash,
    comparePassword
}