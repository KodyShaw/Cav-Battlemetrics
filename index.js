const orm = require("./config/axios-orm");
const api = require("./config/axios-instance");
const fs = require("fs");

let gameName = "squad"

orm.axiosGet(api.battleRequest, `servers?filter[rcon]=true&filter[game]=${gameName}`, response => {
    console.log(response.data);
});