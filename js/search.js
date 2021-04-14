//API KEY
const API_KEY= 'ecdb4cd2';

const selectBox = document.getElementById("select-box");
const searchInput = document.querySelector("#searchInput");
const select = document.getElementById("select");

function getData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        console.log('Data:', data.Search);
        let MoviesList =  data.Search;

        MoviesList.forEach(function(value, key) {
            console.log(key + ' : ' + value.Title)
            var option = document.createElement("OPTION");
            txt = document.createTextNode(value.Title);
            option.appendChild(txt);
            option.setAttribute("value", value.Title);
            select.insertBefore(option,select.lastChild);
          })
    })
    .catch(err=> console.log(err))
}

//fetch data from the api
select.onclick =function(e){
    e.preventDefault();

    const value=searchInput.value;
    const url="http://www.omdbapi.com/?apikey=e94d2f36&s="

    //generate the url based on the user input
    const newUrl= url + value
    console.log(newUrl)
    getData(newUrl);  
}




