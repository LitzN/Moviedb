remove_btns= document.getElementsByClassName('remove_btn');
items = localStorage.getItem('favs');
item_list =items.split(" ")
console.log(item_list)


for(let i=0;i<remove_btns.length;i++){

    remove_btns[i].addEventListener('click', ()=>{
        item = remove_btns[i].classList[0]
        // if movie in fav list
        if (item_list.indexOf(item) != -1){
            console.log("item in list")
            // remove from array
            item_list.splice(item_list.indexOf(item),1)
            // join with spacing
            new_items = item_list.join(" ")
            // replace local storage values
            localStorage.removeItem('favs')
            localStorage.setItem('favs', new_items)
            // hide element
            row_id = remove_btns[i].classList[0]
            row = document.getElementById(row_id)
            row.classList.add('hide')
        }
        else{
            // if already removed from storage, just delete element
            row_id = remove_btns[i].classList[0]
            row = document.getElementById(row_id)
            row.classList.add('hide')
        }
    })
}


/*
for(btn in remove_btns){
    btn.addEventListener('click', function remove(){
        if (item.includes(` ${btn.classList[0]}`)||item[-2] == btn.classList[0] ){
            //newitems = item.replace(` ${remove_btns[i].classList[0]}`, "")
            console.log(item)
            find= item.indexOf(btn.classList[0])
            console.log(item[find])
            //localStorage.removeItem('favs')
            //localStorage.setItem('favs', newitems)
            //form = document.getElementById('sub_watchlist')
            //form.submit()
            
        } else{
            console.log('Not in favourites')
        }
})}
*/
    