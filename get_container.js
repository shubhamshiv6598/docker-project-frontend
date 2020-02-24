


function myFunction() {
    var container;
var url = 'http://localhost:2000/get_containers';
var dummy_data = ['23', '44'];

fetch('https://google.com').then(function(response) {
    return response.json();
  }).then(function(data) {
    container= dummy_data;
    console.log(dummy_data[0]);

  }).catch(function() {
    console.log("Booo");
  });

}