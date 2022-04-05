Vue.createApp({
  data() {
    return {
      number: ""
    }
  },
  methods: {
    calculate() {
      this.number = eval(this.number);
      console.log(eval(this.number));
    },
    buttonPressed(e) {
      if (e.target.type == "button") {

        if (e.target.classList.contains("btn-clear")) {
          this.number = "";
        }

        else if (e.target.classList.contains("btn-equal")) {
          this.calculate();
        }

        else {
          this.number += e.target.textContent;
        }

      }
    }
  }
}).mount("#app");