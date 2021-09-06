import { EventUtil } from "../utils/index";

const home = new Vue({
  el: document.querySelector(`[route-id="home`),
  data() {
    return {
      number: 0,
      setIntervalNum: undefined
    };
  },
  created() {},
  methods: {
    transformation() {
      ++this.number;
      if (this.number < 0) this.number = 2;
      if (this.number >= 3) this.number = 0;
      // this.setIntervalTransformation();
    },
    setIntervalTransformation() {
      this.setIntervalNum && clearInterval(this.setIntervalNum);
      this.setIntervalNum = setInterval(() => {
        this.transformation();
      }, 5000);
    },
    right(){
      --this.number;
      if (this.number < 0) this.number = 2;
      if (this.number >= 3) this.number = 0;
      this.setIntervalTransformation();
    },
    left(){
      this.transformation()
    },
  },
  ready() {
    // this.setIntervalTransformation();
    EventUtil.listenTouchDirection(
      this.$els.swiper,
      false,
      false,
      this.right,
      false,
      this.left
    );
  }
});
