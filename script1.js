//create a request variable
let request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

//load the response
 //2. Get all the countries with population of less than 2 lacs using Filter function
request.onload = function(){
    let data = JSON.parse(this.response);
    let filteredArray = data.filter(function(a)
    {
        return a.population<200000;
    });

    filteredArray.forEach(function(value){
        console.log(value.name);
    });
 }


