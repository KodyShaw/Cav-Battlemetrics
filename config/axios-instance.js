const axios = require("axios");
// Read and set environment variables
require("dotenv").config();

//Can add other axios.create Intances here to save code in long run
const instance = {
    cavRequest: axios.create({
        baseURL: "https://api.7cav.us/v1/",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Authorization': `Bearer ${process.env.CAV_KEY}`
        },
    }),
    battleRequest: axios.create({
        baseURL: "https://api.battlemetrics.com/",
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
            'Authorization': `Bearer ${process.env.BATTLEMETRICS_KEY}`
        }
    })
}

//Exports instance to be used by other files
module.exports = instance;