//ORM to be used with the axios call functions.
const orm = {
    axiosGet: (request, query, callbackFunction) => {
        //console.log(request.defaults.baseURL + query)
        request.get(query).then(res => {
            callbackFunction(res.data);
        }).catch(err => {
            console.log("API Call Error");
            if (!err.response) {
                //console log whole err if no response is found
                console.log(err);
            }else {
                console.log(`Status code: ${err.response.status}`);
                console.log(`API Error data:\n`, err.response.data);
            }
        });
    }
}

// Exports the orm for other files to use
module.exports = orm;


//In this case of my code a basic API get call will be added like so: 
// 
// API.axiosGet(instance.exampleRequest, `example/request/route`, response => {
//     console.log(response.data);
// });