//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//load the response
//GET ALL COUNTRIES IN ASIA USING FILTER FUNCTION
request.onload = function(){
    let data = JSON.parse(this.response);
    let filteredArray = data.filter(function(a)
    {
        return a.region==="Asia";
    });

    filteredArray.forEach(function(value){
        console.log(value.name);
    });
 }