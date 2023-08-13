const list=document.getElementById('list');
const hamburger=document.getElementById('hamburger');
const cross=document.getElementById('cross');
if(hamburger){
    hamburger.addEventListener('click', () => {
        list.classList.add('active');
    })
}
if(cross){
    cross.addEventListener('click', ()=> {
     list.classList.remove('active');   
    })
}