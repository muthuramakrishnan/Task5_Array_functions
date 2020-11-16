//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//load the response
 //Print the country which use US Dollars as currency. 
request.onload = function(){
    let data = JSON.parse(this.response);
    let filteredArray = data.filter(function(a)
    {
        return a.currencies[0].code==='USD';
    });
    filteredArray.forEach(function(value)
    {
        console.log(value);
    });
 }