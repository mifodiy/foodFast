$(function () {

  const reviewSwiper = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  let $range = $(".price__range-slider"),
  $inputFrom = $(".price__input--from"),
  $inputTo = $(".price__input--to"),
  instance,
  min = 0,
  max = 1200,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  const productSwiper = new Swiper('.product__slider', {
    slidesPerView: 1,
    spaceBetween: 100,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  Fancybox.bind('[data-fancybox="images"]', {
    Thumbs: false,
    Toolbar: false,
    baseClass: 'fancybox-custom-layout',
    thumbs: {
      hideOnClose: false,
      parentEl: '.fancybox-outer'
    },
    onInit: function (instance) {

      instance.$refs.inner.wrap('<div class="fancybox-outer"></div>');
    },

    closeButton: "top",
    template: {
      closeButton: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8759 16.0087L31.593 2.2916C32.1224 1.7803 32.1371 0.936661 31.6258 0.40724C31.1145 -0.122182 30.2708 -0.136862 29.7414 0.374444C29.7303 0.385141 29.7194 0.396074 29.7086 0.40724L15.9914 14.1243L2.27434 0.407162C1.74492 -0.104144 0.901276 -0.0894636 0.38997 0.439958C-0.108842 0.956417 -0.108842 1.77515 0.38997 2.2916L14.1071 16.0087L0.38997 29.7258C-0.130316 30.2461 -0.130316 31.0898 0.38997 31.6101C0.910334 32.1304 1.75397 32.1304 2.27434 31.6101L15.9914 17.8931L29.7085 31.6101C30.238 32.1215 31.0816 32.1068 31.5929 31.5774C32.0916 31.0609 32.0916 30.2422 31.5929 29.7258L17.8759 16.0087Z" fill="black" fill-opacity="0.15"/>
      </svg>
      `,
    },
    Carousel: {
      Dots: true,
      onInit: function (instance) {

        instance.$refs.inner.wrap('<div class="fancybox-outer"></div>');
      },

      Navigation: {

        prevTpl:
          `<svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.03833 17.0149L17.0516 31.6079C17.5771 32.1307 18.4293 32.1307 18.9548 31.6079C19.4802 31.0851 19.4802 30.2369 18.9548 29.7141L3.90702 16L18.9534 2.2859C19.4789 1.76309 19.4789 0.91484 18.9534 0.392073C18.428 -0.130694 17.5758 -0.130694 17.0503 0.392073L1.037 14.9851C0.756928 15.2637 0.636853 15.6332 0.655559 15.9986C0.638146 16.3654 0.758181 16.7348 1.03833 17.0149Z" fill="#505050"/>
        </svg>`,
        nextTpl:
          `<svg width="20" height="32" viewBox="0 0 20 32" fill="#505050" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z" fill="#505050"/>
        </svg>`,
      },
    },
  });

  $(".product__rating, .review-prod__rating").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    spacing: "6px",
    readOnly: true,
    ratedFill: "#FFB800",
    "starSvg": `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_3197_367)">
  <path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>
  </g>
  <defs>
  <clipPath id="clip0_3197_367">
  <rect width="16" height="16" transform="matrix(-1 0 0 1 16 0)"/>
  </clipPath>
  </defs>
  </svg>`
  });

  $('.product__input').styler({

  })


  AOS.init();

  const mixer = mixitup('.categories__list');
  mixer.filter('.sandwich');
});