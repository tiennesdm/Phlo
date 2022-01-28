module.exports = function () {
    let data = this._doc;
    if(data._id) data.id = data._id;
    let doc = {
        id: data.id,
        ...(function () {
            // remove unnecessary properties
            delete data._id;
            delete data.__v;
            // return cleaned object
            return data;
        }())
    }

    return doc;
}