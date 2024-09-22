let main = document.querySelector('.main')
let btn = document.querySelector('.form button')
let inp = document.querySelector('.form input')
let img = document.querySelector('.qr img')

btn.onclick = function() {
    let inpValue = inp.value
    console.log(inpValue);
    if(!inpValue) return;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=
    200x200&data=${inpValue}`;
    main.classList.add('active')
    
}