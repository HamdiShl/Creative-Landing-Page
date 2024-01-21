let img = document.querySelector('.img');
let container = document.querySelector('.container');
let 
/* This function is used to show you the phone in large size, 
when you click on the small image of the phone at the bottom of the page */ 
function phones(phone)
{
    img.src=phone;
    
}

/* This function is used to change the background color of the Container,
 when you click on the small image of the phone at the bottom of the page*/

function MakeColor(color)
{
    container.style.background = color;
   

}
