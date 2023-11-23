//main banner 슬라이더
new Swiper('.swiper', {
    autoplay: {
      delay: 5000
    },
    slidesPerView: "auto",
    loop: true,
    slidesPerView: 3,
    spaceBetween: -1,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })


//promotion 슬라이더
  new Swiper('.swiper.promotion', {
    autoplay: {
      delay: 5000
    },
    slidesPerView: "auto",
    loop: true,
    allowTouchMove : true,
    slidesPerView: 4,
    spaceBetween: 24,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })

  //products 슬라이더
  new Swiper('.swiper.products', {
    autoplay: {
      delay: 5000
    },
    slidesPerView: "auto",
    loop: true,
    slidesPerView: 5,
    spaceBetween: 24,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  })