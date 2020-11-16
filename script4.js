//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true); //true refers to Asynchronous.  If there's an error the flow will continue

//send the request
request.send();

//load the response
//Print the total population of countries in Asia continent using reduce and filter function
request.onload = function(){
    let data = JSON.parse(this.response);
    let filteredArray = data.filter(function(a)
    {
        return a.region==="Asia";
    });

    let total = filteredArray.reduce(function(accumulator,country)
    {
        return accumulator+country.population;
    },0);
    console.log(total);
}
