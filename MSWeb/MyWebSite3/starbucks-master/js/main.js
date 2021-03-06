// console.log("js") /* 잘 연결되었나 개발자 도구-콘솔창에 로그 띄워 확인*/

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); //이곳에 힌트//
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); //블러되면 지우기//
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
// gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0, /* 0.6초 동안 점점 투명해진다 */ 
      display: 'none' /* gsap에서 숫자는 그냥 써도 되고, 문자는 따옴표 */
    }); 
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300)); /* 0.3초 단위로 부하를 주어 한번에 우르르 실행되는 것을 방지*/ 


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7 1.4 2.1 2.8초 별로 실행
    opacity: 1
  })
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',  // 오류난다 짜시가
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 술라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


 const promotionEL = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 let isHidePromotion = false; // 처음에는 보이고 있다.  
 promotionToggleBtn.addEventListener('click', function () {
   isHidePromotion = !isHidePromotion 
     if (isHidePromotion) {
       // 숨김 처리
       promotionEL.classList.add('hide');
     } else {
      // 보임 처리
     promotionEL.classList.remove('hide');
     }
     // css가서 정의해주자
 });


 // 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

 function floatingObject(selector, delay, size) {
   // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      { // 옵션
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
      }
    );
  }

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);