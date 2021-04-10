//API KEY
const API_KEY= 'ecdb4cd2'

const searchInput= document.querySelector('#searchInput');
const searchButton= document.querySelector("#searchButton");
const movieTitle= document.querySelector("#movieTitle");
const movieYear= document.querySelector("#movieYear");
const movieDetailsbtn= document.querySelector("#movieDetailsbtn");
const viewLessbtn= document.querySelector("#viewLessbtn");

function getData(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
        console.log('Data:', data);
        movieTitle.innerHTML= "Title : " + data.Title
        movieYear.innerHTML= "Year : " + data.Year
            + "<div>" + data.Language +"</div>"
            +  "<div>" + data.Country +"</div>"

        moviedetails.innerHTML= "Cast : "+ data.Actors 
         + "<div>" + "Collection : " + data.BoxOffice +"</div>" 
         +"<div>" + "Genre : " + data.Genre +"</div>" 
         + "<div>"+ "Director : " + data.Director +"</div>"        
        
    })
    .catch(err=> console.log(err))
}

//fetch data from the api
searchButton.onclick=function(event){
    event.preventDefault();

    const value=searchInput.value;
    const url="http://www.omdbapi.com/?t="

    //generate the url based on the user input
    const newUrl= url + value + "&apikey=" + API_KEY;
    console.log(newUrl)
    getData(newUrl);  
}

//toggle between the buttons to hide and show details
movieDetailsbtn.onclick=(()=>{
    console.log("show")
    moviedetails.style.display= "block";  
    movieDetailsbtn.style.display= "none"; 
    viewLessbtn.style.display="block";
})

viewLessbtn.onclick=(()=>{
    console.log("hide")
    moviedetails.style.display= "none";  
    movieDetailsbtn.style.display= "block";
    viewLessbtn.style.display= "none";  
})


//add to favourite function
function addToFavourite(id){
    let existing=localStorage.getItem('favourite');
    existing=existing?existing.split(','):[];
    existing.push(id);
    localStorage.setItem('favourite', existing.toString());
}

//check if a movie is in favourite list
function checkFavourite(id){
    let list=localStorage.getItem('favourite');
    list=list?list.split(','):false;
    if(!list){
        return false;
    }
    else{
        if(list.includes(id)){
            return true;
        }
        else{
            return false;
        }
    }
}

//function to get all favourite movies
function getFavourites(){
    let list = localStorage.getItem('favourite');
    list=list?list.split(','):[];
    return list;
}

//remove a movie from favourites
function removeFromFavourites(id){
    let list=localStorage.getItem('favourite');
    list = list ? list.split(',') : [];
    if(list.length!==0){
        list = list.filter(item => item !== id)
    }
    localStorage.setItem('favourite', list.toString());
}



