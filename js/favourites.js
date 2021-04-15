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

