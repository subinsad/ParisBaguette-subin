"use strict";

var _ref, _ref2, _ref3, _ref4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//main banner 슬라이더
new Swiper('.swiper', (_ref = {
  autoplay: {
    delay: 5000
  },
  slidesPerView: "auto",
  loop: true
}, _defineProperty(_ref, "slidesPerView", 3), _defineProperty(_ref, "spaceBetween", -1), _defineProperty(_ref, "centeredSlides", true), _defineProperty(_ref, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _defineProperty(_ref, "navigation", {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next'
}), _ref)); //promotion 슬라이더

new Swiper('.swiper.promotion', (_ref2 = {
  autoplay: {
    delay: 5000
  },
  slidesPerView: "auto",
  loop: true,
  allowTouchMove: true
}, _defineProperty(_ref2, "slidesPerView", 4), _defineProperty(_ref2, "spaceBetween", 24), _defineProperty(_ref2, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _defineProperty(_ref2, "navigation", {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next'
}), _ref2)); //products 슬라이더

new Swiper('.swiper.products', (_ref3 = {
  autoplay: {
    delay: 5000
  },
  slidesPerView: "auto",
  loop: true
}, _defineProperty(_ref3, "slidesPerView", 5), _defineProperty(_ref3, "spaceBetween", 24), _defineProperty(_ref3, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _defineProperty(_ref3, "navigation", {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next'
}), _ref3)); //sns 슬라이더

new Swiper('.swiper.sns', (_ref4 = {
  autoplay: {
    delay: 5000
  },
  slidesPerView: "auto",
  loop: true
}, _defineProperty(_ref4, "slidesPerView", 6), _defineProperty(_ref4, "spaceBetween", 0), _defineProperty(_ref4, "pagination", {
  el: '.swiper-pagination',
  clickable: true
}), _defineProperty(_ref4, "navigation", {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next'
}), _ref4));