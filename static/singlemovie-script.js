
// Watch button to add movie id to local storage
watch_button = document.getElementById('watch');

watch_button.addEventListener('click', function add(){
    add_movie = watch_button.classList[0]
        item = localStorage.getItem('favs');
        if (item == null){
            // create favs if none exist
            localStorage.setItem('favs',` ${add_movie}`)
        }else if(item.includes(` ${add_movie} `)|| item.includes(` ${add_movie}`)){
            console.log('Already in favs')
        }else{
            newitem = item + ' ' + add_movie
            localStorage.removeItem('favs')
            localStorage.setItem('favs', newitem)
        }
})
