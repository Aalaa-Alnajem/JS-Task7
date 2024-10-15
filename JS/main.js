// Section [Home]

$('#openNav').click(function(){
    $('.homePage .nav').animate({'left':'0px'},500);
})
$('#closeNav').click(function(){
    $('.homePage .nav').animate({'left':'-250px'},500);
})
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('#openNav');
    if (window.scrollY > 348 ) { 
    navbar.style.display = 'none';
    } else {
    navbar.style.display = 'block';
    }
});


// Section [Singers]

$('#singers h3').click(function(e){
    const slide = $('#singers p');
    const ele = $(e.target).next()[0];
    if(ele.style.display == 'block'){
        $(e.target).next().slideUp(500);
    }else{ 
        $(slide).slideUp(500);
        $(e.target).next().slideDown(500);
    }})

// Section [counter] 

let countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();

setInterval(() => {
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
days < 10 ? days = "0" + days: days;

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
hours < 10 ? hours = "0" + hours: hours;

let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
minutes < 10 ? minutes = "0" + minutes: minutes;

let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
seconds < 10? (seconds = "0" + seconds): seconds;

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}, 1000);

// Section [Contact]

let maxLength = 100;
$('textarea').keyup(function (){
    let length = $(this).val().length;
    let counter = maxLength - length;
    if(counter <= 0){
        $('#char').text('your available character finished');
    }else{
        $('#char').text(counter)
    }
    
});