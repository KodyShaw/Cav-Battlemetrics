//ORM to be used with the axios call functions.
const orm = {
    axiosGet: (request, query, callbackFunction) => {
        request.get(query).then(res => {
            callbackFunction(res.data);
        }).catch(err => {
            console.log("API Call Error");
            if (!err.response) {
                console.log(err);
            }else {
                console.log(`Status code: ${err.response.status}`);
                if (err.response.data.message = undefined) {
                    console.log(`API Message: ${err.response.data.message}`);
                }
                else {
                    console.log(`API Error: ${err.response.data.error}`);
                }
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