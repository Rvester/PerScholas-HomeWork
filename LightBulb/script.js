let button = document.querySelector('.button');
let body = document.querySelector('body');
let bulb = document.querySelector('.bulb');
let audio = document.querySelector('.audio')


button.onclick = function(){
    
   if (body.classList.toggle('on')){
    body.style.backgroundColor = 'White'
} else{
    body.style.backgroundColor = 'rgb(49, 49, 49)';
   }
   audio.play();
        
}
    
       

    







