characters = document.getElementById("characters")

var count = 1;
// function to increment value of count variable
function incrementCount() {
    console.log(count)
    count++;
}
//function to access the star wars api
function getNames() {
    let apiUrl = 'https://swapi.co/api/people/' + count

    axios.get(apiUrl).then(response => {
        myFunction(response.data)
    }).catch(e => {
        console.log(e)
    })
}
//function to display data on the web page.
function myFunction(data) {
    characters.innerHTML = characters.innerHTML + "<b>Name:</b> " + data.name + "<br>" + "<b>Height:</b> " + data.height + "<br>" + "<b>Mass: </b>" + data.mass + "<br>" + "<b>Gender: </b>" + data.gender+ "<br>" + "<b>Birth Year:</b> " + data.birth_year + "<br>" + "<br>";
}

button.addEventListener('click', incrementCount)

// var client = new XMLHttpRequest();
// client.open('GET', '/varnish.log');
// client.onreadystatechange = function() {
//   alert(client.responseText);
// }
// client.send();

// $(document).ready(function() {
//   $("#varnish").click(function() {
//     $("#test").load("varnish.log");
//   });
// });
