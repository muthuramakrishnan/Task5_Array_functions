//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//load the response
 //Print the following details name, capital, flag using forEach function
request.onload = function(){
    let data = JSON.parse(this.response);
    data.forEach(function(value)
    {
        console.log("Name :"+(value.name)+"Capital = "+(value.capital)+"flag = "+(value.flag));
    });
 }