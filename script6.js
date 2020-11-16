//create a request variable
let request = new XMLHttpRequest();

//open a connection
try{
    request.open('GET', 'https://estcountries.eu/rest/v2/all', false);

//send the request
request.send();

//load the response
//Add error handling to the xml http request code
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
}
catch(e)
{
    alert("Unable to locate the URL");
}