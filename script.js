const burger= document.querySelector('#sticky_burger');
const navbar = document.querySelector('#navbar_whole');

burger.addEventListener('click',()=>{

if(navbar.classList.contains('show')){
    navbar.classList.remove('show');

}else{
    navbar.classList.add('show');
    
}
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});