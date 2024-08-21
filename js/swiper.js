var swiper = new Swiper(".mySwiper", {
    navigation: {
        slidesPerView:2,
        spaceBetween:2,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        640:{
            slidesPerView:3,
            spaceBetween:20,
        },
        768:{
            slidesPerView:5,
            spaceBetween:40,
        },
        1024:{
            slidesPerView:7,
            spaceBetween:50,
        },
    }
  });
