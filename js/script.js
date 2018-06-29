var controller = new ScrollMagic.Controller();

//Pin Navbar to sticky
$(function () {
  var scene = new ScrollMagic.Scene({
      triggerElement: `#navstart`,
      reverse: true,
      triggerHook: 0
    }).setPin(`#navstart`)
    .addIndicators()
    .addTo(controller);
  
    // Move navbar from its initial position to the correct one
    var tween0 = new TimelineMax()
      .add(TweenMax.fromTo("#navstart", 1, {y:"-100%"}, {y: "0%", ease: Linear.easeNone}));

    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#parallax1",
      duration: $(window).height(),
      triggerHook: 0
    }).setTween(tween0)
      .addIndicators()
      .addTo(controller);

// Jumbotron Parallax Effect
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

// Navbar triggers
  var scene3 = new ScrollMagic.Scene({
      triggerElement: "#aboutme",
      triggerHook: 0.25,
      duration: "100%"
    }).setClassToggle("#aboutmenav", "active")
    .addIndicators()
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#portfolio",
    triggerHook: 0.25,
  }).setClassToggle("#portfolionav", "active")
    .addIndicators()
    .addTo(controller);

// // Slide animations
//   var wipeAnimation = new TimelineMax()
//     .fromTo("section.panel.panelone", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
//     .fromTo("section.panel.paneltwo", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});

//   var scene5 = new ScrollMagic.Scene({
//     triggerElement: "#pinContainer",
//     triggerHook: 0,
//     duration: "300%"
//   })
//     .setPin("#pinContainer")
//     .setTween(wipeAnimation)
//     .addIndicators()
//     .addTo(controller);

    //Smooth Scroll
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