'use strict';
const links = document.querySelectorAll('.target');

const burger = document.querySelector('.burger');
const closes = document.querySelector('.closes');
const nav = document.querySelector('nav');


links.forEach(link => {
  link.addEventListener('click',function(e) {
    e.preventDefault();
    links.forEach(one => {
      if(one !== link) {
        addClass(one,true);
      }
    })
    addClass(link)
  })
})

function addClass(item,value = false) {
  if(value) {
    item.classList.remove('active');
    item.nextElementSibling.classList.remove('active');
  }else {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  }
}


burger.addEventListener('click',function() {
  display('none','block');
  nav.style.top = '50%';
})
closes.addEventListener('click',function() {
 display('block','none');
 nav.style.top = '-70%';
})


function display(first,second) {
  burger.style.display = first;
  closes.style.display = second;
}

