//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true); //true refers to Asynchronous.  If there's an error the flow will continue

//send the request
request.send();

//load the response
//Print the total population of countries using reduce function
request.onload = function(){
    let data = JSON.parse(this.response);
    let total = data.reduce(function(accumulator,country)
    {
        return accumulator+country.population;
    },0);
    console.log(total);
}
