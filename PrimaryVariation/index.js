window.onload = function () {
  if (navigator.userAgent.indexOf('Edge') > -1) {
      alert("This website is not supported on Microsoft Edge.");
      window.location.href = "unsupported.html";
  }
};


var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  

  
  //TIME line
  
  var cards = document.querySelectorAll(".card_edu");
var playing = false;

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    if (playing) return;
    playing = true;

    anime({
      targets: card,
      rotateY: { value: '+=180', delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
      complete: function(anim) {
        playing = false;
      }
    });
  });
});

  

AOS.init({
  offset:300,
  duration:1000,
})
