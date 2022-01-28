/**
 * Find Index FROM the ARRAY
 * @param {Array} data
 * @param {String} key
 * @param {String || Integer} item  
 * 
 * ******* */

export const findItemIndex = (data, key, item) =>{
    let responseDataIndex = data.findIndex(
        (data) => data[key] === item,
    );
    return responseDataIndex;

 }