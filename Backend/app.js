require('dotenv').config();
const express = require('express');
const path = require("path");
const app = express();
const nocache = require('nocache');
const cors = require('cors');
const api = require('./api/');
const middleware = require('./api/utilities');

app.set('trust proxy', true);
app.set('etag', false);
app.use(express.json());
app.use(express.urlencoded());
app.use(nocache());
app.use(cors());
app.get('/status',(req,res)=>res.json({status:'ok'}));
app.use('/api', [middleware.validateRequestMethod], api);

app.use((error, req, res, next) => {
    const status = error.status || error.statusCode || 400;
    let message = error.message || "Invalid Grant";
    let additional_info = error || {};
    res.status(status).json({ success: false, errno: status, message: message, additional_info: additional_info });
}); // handle all error and send response


app.use("/", express.static(path.join(__dirname, "build")));
app.all('/*', (req, res) => {
	res.status(404).send({errno:3001, message:"INVALID_ENDPOINT"});
});
// Error Handling



app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening on ${process.env.PORT || 5000}`);
});