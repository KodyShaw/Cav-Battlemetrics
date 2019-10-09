const axios = require("axios");
const AUTH_TOKEN = require("./auth-keys")


//Can add other axios.create Intances here to save code in long run
const instance = {
    cavRequest: axios.create({
        baseURL: "https://api.7cav.us/v1/",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Authorization': `Bearer ${AUTH_TOKEN.cav}`
        },
    })
}

//Exports instance to be used by other files
module.exports = instance;