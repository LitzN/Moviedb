// get html elements with class movie (table rows)
movies = document.getElementsByClassName('movie')
// get html elements with class genrebtn (selector buttons)
genrebtns = document.getElementsByClassName('genrebtn')

yearbtns = document.getElementsByClassName('yearbtn')

ratingbtns = document.getElementsByClassName('ratingbtn')

// filter for genre
for (i=0;i<genrebtns.length; i++){
    genre= genrebtns[i].id
    genrebtns[i].addEventListener('click',function open(){
        //console.log(this.id)
        for (j=0;j<movies.length;j++){
            if ((movies[j].classList[0]) == (this.id)){
                movies[j].classList.remove('hide')
            }else{
                movies[j].classList.add('hide')
            }
        }
    })
}

// filter for years
for (i=0; i<yearbtns.length; i++){
    year = yearbtns[i].id
    yearbtns[i].addEventListener('click', function open(){
        //console.log(this.id)
        for (j=0; j<movies.length; j++){
            movieyear = movies[j].classList[0]
            decade = movieyear[2]
            console.log(this.id[0])
            console.log(decade)
            if (decade == this.id[0]){
                movies[j].classList.remove('hide')
            }
            else if ((decade >2 && decade < 9) && (this.id == 'older')){
                movies[j].classList.remove('hide')
            }else{
                movies[j].classList.add('hide')
            }
        }
    })
}

// filter for Rating
for (i=0;i<ratingbtns.length; i++){
    rating= ratingbtns[i].id
    ratingbtns[i].addEventListener('click',function open(){
        console.log(this.id)
        for (j=0;j<movies.length;j++){
            if ((movies[j].classList[0]) == (this.id)){
                movies[j].classList.remove('hide')
            }else{
                movies[j].classList.add('hide')
            }
        }
    })
}
