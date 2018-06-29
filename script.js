var controller = new ScrollMagic.Controller();

$(function () {
  var scene = new ScrollMagic.Scene({
      triggerElement: `#navtrigger`,
      reverse: true,
      triggerHook: 0
    }).setPin(`#navstart`)
    .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
      triggerElement: "#parallax1",
      duration: "200%",
      triggerHook: "onEnter",
    })
    .setTween("#parallax1 > div", {
      y: "80%",
      ease: Linear.easeNone
    })
    .addTo(controller);


});
