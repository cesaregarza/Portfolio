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

  var scene3 = new ScrollMagic.Scene({
      triggerElement: "#navtrigger",
      triggerHook: 0.25
    }).setClassToggle("#aboutmenav", "active")
    .addTo(controller);

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.3, {
      scrollTo: {
        y: newpos
      }
    });
  });

  $(document).on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      controller.scrollTo(id);

      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }
  });

});