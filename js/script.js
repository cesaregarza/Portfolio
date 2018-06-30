var controller = new ScrollMagic.Controller();

//Pin Navbar to sticky
$(function () {
  $("#footer").position({
    my: "left top",
    at: "left bottom",
    of: "parallax1"
  });
  $("#footer").css("position", "fixed");
  $("#footer").css("top", "89%");
  var scene = new ScrollMagic.Scene({
      triggerElement: `#navstart`,
      reverse: true,
      triggerHook: 0
    }).setPin(`#navstart`)
    .addTo(controller);

  // Move navbar from its initial position to the correct one
  var tween0 = new TimelineMax()
    .add(TweenMax.fromTo("#navstart", 1, {
      y: "-100%"
    }, {
      y: "0%",
      ease: Linear.easeNone
    }))
    .add(TweenMax.fromTo("#navlinks", 1, {
      backgroundColor: "rgba(0,0,0,0)"
    }, {
      backgroundColor: "rgba(0,0,0,1)",
      ease: Linear.easeNone
    }))
    .add(TweenMax.fromTo(".nav-link", 1, {
      backgroundColor: "rgba(0,0,0,0)"
    }, {
      backgroundColor: "rgba(0,0,0,1)",
      ease: Linear.easeNone
    }));


  var scene1 = new ScrollMagic.Scene({
      triggerElement: "#parallax1",
      duration: $(window).height(),
      triggerHook: 0
    }).setTween(tween0)
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
    .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
      triggerElement: "#portfolio",
      triggerHook: 0.25,
      duration: "100%"
    }).setClassToggle("#portfolionav", "active")
    .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
      triggerElement: "#skills",
      triggerHook: 0.25,
      duration: "100%"
    }).setClassToggle("#skillsnav", "active")
    .addTo(controller);

    var scene6 = new ScrollMagic.Scene({
      triggerElement: "#hobbies",
      triggerHook: 0.25,
      duration: "100%"
    }).setClassToggle("#hobbiesnav", "active")
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
    TweenMax.to(window, 0.5, {
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