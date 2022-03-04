class Toggle {
    constructor(element) {
      this.$element = $(element);
      this.attachEvent();
    }

    attachEvent() {
      this.$element.on('click', () => {
        this.toggleClass();
      });
    }

    toggleClass() {
      this.$element.toggleClass('active');
    }
  }

  const toggle = new Toggle('.toggle');

// placeholder's icons
$('#iconified').on('keyup', function() {
    var input = $(this);
    if(input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});

//   toggle button for navbar
  function openSideMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("primaryNav").classList.toggle("open1");
};

// animation for the button and login link
gsap.from("input, .btn , .login_link", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    stagger: 0.2,
    ease: "elastic",
    force3D: true
  });

//   animation for the texts
// gsap.to(".choose__text", { duration: 2.5, ease: "power1.inOut", y: -50 });
gsap.to("#signup", {duration: 2, x: -40, ease: "bounce"});

