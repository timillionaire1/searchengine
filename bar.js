function searchInput(){
    myParent=document.getElementById('parent');
    let inputBox=document.getElementById('search-box');
    let userInput=document.getElementById('search-box').value;
    let myList=document.getElementsByClassName('list');
    if(userInput.length>0){
        for(let i=0;i<myList.length;i++){
            if (!myList[i].innerHTML.includes(userInput.toLowerCase())){
                myList[i].style.display='none';
            }else{
                myList[i].style.display='list-item';
            }
        }
        myParent.style.display='block';
        for(let i=0;i<myList.length;i++){
            myList[i].onclick=function(){
                let userInput=document.getElementById('search-box').value;
                let show=this.textContent;
                //console.log(show)
                inputBox.value=show;
            }
        }
    }else{
        myParent.style.display='none'
    } 
    let searchIcon=document.getElementById('img');
    searchIcon.onclick=function(){
        let url='https://www.google.com/search?q=' + inputBox.value;
        window.open(url);
    }
}
