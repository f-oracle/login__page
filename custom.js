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

//   toggle button for navbar
  function openSideMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    document.getElementById("primaryNav").classList.toggle("open1");
};