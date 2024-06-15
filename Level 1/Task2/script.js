const colorBtn = document.getElementById('colorBtn');
let container=document.querySelector('.container');
colorBtn.addEventListener('click', function() 
{
    colorBtn.classList.toggle('clicked');
    container.classList.toggle('toggle');

});
const hour = new Date().getHours();
let greeting;
if (hour < 12) 
{
    greeting = 'Good morning!';
} else if (hour < 18) 
{
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}
alert(greeting);