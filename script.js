//функция суммирования 2х чисел
function Sum( num1 ,num2)
{
    return num1 +num2;
}

let picture  = document.querySelector('img');
let paragraph = document.querySelector('p');
let paragraph2 = document.getElementById('text2');
let buttonPic = document.querySelector("#btnPic");
let buttonText = document.querySelector('#btnText');
let buttonText2 = document.getElementById('btnText2');
const x = document.querySelector('.xxx');

x.addEventListener('click',function(){
    x.classList.add('yyy');
  
}) 

buttonPic.onclick = function(){
    PictureChange(); 
    TextChange();
}
buttonText.onclick = function(){
    TextChange();
}
buttonText2.onclick = function(){
    TextChange2();
}


function PictureChange(){
    picture.src='img/2.jpg';
}

function TextChange(){
    paragraph.textContent='поменял текст';
}
function TextChange2(){
    paragraph2.textContent='поменял текст2';
}





 



 
