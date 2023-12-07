window.addEventListener(`keydown`, function(e){
    const audio =document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;// stop the function
    audio.currentTime= 0; // time 
    audio.play();
    
});