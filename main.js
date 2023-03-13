const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'swap',
    grabCursor: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed: 800,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

let navBtn = document.querySelector('.header__content-box-links'),
    boxJs = document.querySelector('.header__box-js'),
    closes = document.querySelector('.header__close'),
    link1 = document.querySelector('.header__nav-link1'),
    link2 = document.querySelector('.header__nav-link2'),
    link3 = document.querySelector('.header__nav-link3'),
    link4 = document.querySelector('.header__nav-link4'),
    link5 = document.querySelector('.header__nav-link5'),
    box = document.querySelector('.js__box'),
    nav = document.querySelector('.header__nav-box'),
    footer = document.querySelector('.div__footer'),
    raketa = document.querySelector('.raketa__link')
    // raketa = document.querySelector('.raketa__link')

navBtn.addEventListener('click', () => {
    boxJs.style.display = 'flex';
    boxJs.style.height = '750vh'
    boxJs.style.width = '70%'
    boxJs.style.zindex = '999'
    closes.addEventListener('click', () => {
      boxJs.style.display = 'none'
    })
})
link1.addEventListener('click', () => {
  boxJs.style.display = 'none'
})
link2.addEventListener('click', () => {
  boxJs.style.display = 'none'
})
link3.addEventListener('click', () => {
  boxJs.style.display = 'none'
})
link4.addEventListener('click', () => {
  boxJs.style.display = 'none'
})
link5.addEventListener('click', () => {
  boxJs.style.display = 'none'
})

class Scroll {
  constructor({element, bottom}) {
    if(typeof element == 'string') {
      this.item = document.querySelector(element)
    }else if(element instanceof HTMLElement) {
      this.item = element
      this.item.append(raketa)
    }
    this.range = bottom
    this.item.style.position = 'fixed'
    this.item.style.bottom = this.range + 'px'
    window.addEventListener('scroll', () => this.move())
  }
  move() {
    if(this.range - scrollY > 20) {
      this.item.style.bottom = this.range - scrollY + 'px'
    }
  }
}

let myScroll = new Scroll({
  element: '.div__footer',
  bottom: 70  
})





