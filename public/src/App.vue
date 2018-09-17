<template>
    <main>
        <header id="Home">
            <div id="blackBar"></div>
            <div id="headerImgDiv">
                <router-link id="homeRouter" :to="`/`"><img id="bwLogo" src="/images/bwLogo.svg" alt=""></router-link>
                <div @click="hamburgSlide" id="hamburger">
                    <div class="hamClass hamOne">
                        
                    </div>
                    <div class="hamClass hamTwo">
                        
                    </div>
                </div>
            </div>
            <nav>
                <div class="navDiv">
                    <ul>
                        <router-link id="homeNavButton" :to="`/`"><li @click="toWork">Home</li></router-link>
                        <li v-if="navTrigger == true" @click="toWork">Work</li>
                        <li v-if="navTrigger == true" @click="toWork">About</li>
                        <li v-if="navTrigger == true" @click="toWork">Skills</li>
                        <li v-if="navTrigger == true" @click="toWork">Contact</li>
                    </ul>
                </div>
            </nav>
        </header>
        <transition name="fade">
            <router-view v-bind:works="works">
            </router-view>
        </transition>
    </main>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      works: [],
      hamburg: "",
      hamOne: "",
      hamTwo: "",
      navDiv: "",
      scrollToElement: "",
      work: "",
      work1: "",
      work2: "",
      about: "",
      about1: "",
      about2: "",
      test: "",
      navTrigger: true,
      test2: "",
      skills: "",
      skills1: "",
      skills2: "",
      contact: "",
      contact1: ""
    };
  },
  created: function() {
    var vm = this;
    axios.get("/api/work").then(function(response) {
      // console.log(response);
      vm.works = response.data;
    });
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    hamburgSlide: function() {
      this.hamburg = this.$el.querySelector("nav");
      this.hamOne = this.$el.querySelector(".hamOne");
      this.hamTwo = this.$el.querySelector(".hamTwo");
      this.navDiv = this.$el.querySelector(".navDiv");
      this.work = this.$el.querySelector("#Work");
      this.test = this.$el.querySelector("#seeMore");

      if (this.test) {
        this.work1 = this.work.getBoundingClientRect().top;
        this.work2 = this.work.getBoundingClientRect().bottom;
        this.hamburg.classList.toggle("growMenu");
        this.hamOne.classList.add("hamColor");
        this.hamOne.classList.toggle("hamOneChange");
        this.hamTwo.classList.add("hamColor");
        this.hamTwo.classList.toggle("hamTwoChange");
        this.navDiv.classList.toggle("navDivChange");

        this.navTrigger = true;

        if (this.hamburg.classList[0] == null && this.work1 > 50) {
          // console.log(1);
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        } else if (
          this.hamburg.classList[0] == null &&
          (this.work1 < 50 && this.work2 > 50)
        ) {
          this.hamOne.classList.add("hamColor");
          this.hamTwo.classList.add("hamColor");
          // console.log(2);
        } else if (
          this.hamburg.classList[0] == null &&
          (this.about1 < 50 && this.about2 > 50)
        ) {
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        } else if (
          this.hamburg.classList[0] == null &&
          (this.skills1 < 50 && this.skills2 > 50)
        ) {
          this.hamOne.classList.add("hamColor");
          this.hamTwo.classList.add("hamColor");
        } else if (this.hamburg.classList[0] == null && this.contact1 < 50) {
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        }
      } else {
        this.navTrigger = false;
        this.hamburg.classList.toggle("growMenu");
        this.hamOne.classList.toggle("hamColor");
        this.hamOne.classList.toggle("hamOneChange");
        this.hamTwo.classList.toggle("hamColor");
        this.hamTwo.classList.toggle("hamTwoChange");
        this.navDiv.classList.toggle("navDivChange");
      }
    },
    toWork: function(e) {
      // this.test = this.$el.querySelector("#seeMore");
      this.hamburg.classList.remove("growMenu");
      this.hamOne.classList.remove("hamColor");
      this.hamOne.classList.remove("hamOneChange");
      this.hamTwo.classList.remove("hamColor");
      this.hamTwo.classList.remove("hamTwoChange");
      this.navDiv.classList.remove("navDivChange");

      if (
        (this.work1 <= 0 && this.work2 >= 50) ||
        (this.skills1 <= 0 && this.skills2 >= 50)
      ) {
        this.hamOne.classList.add("hamColor");
        this.hamTwo.classList.add("hamColor");
      }

      if (this.test) {
        this.scrollToElement = "#" + e.target.innerHTML;
        TweenLite.to(window, 1.5, {
          scrollTo: this.scrollToElement,
          ease: Power2.easeOut
        });
      }
    },
    handleScroll: function() {
      this.test = this.$el.querySelector("#seeMore");
      this.hamburg = this.$el.querySelector("nav");
      this.hamOne = this.$el.querySelector(".hamOne");
      this.hamTwo = this.$el.querySelector(".hamTwo");
      this.work = this.$el.querySelector("#Work");
      this.about = this.$el.querySelector("#About");
      this.skills = this.$el.querySelector("#Skills");
      this.contact = this.$el.querySelector("#Contact");
      if (this.test) {
        // console.log(2342342);
        this.work1 = this.work.getBoundingClientRect().top;
        this.work2 = this.work.getBoundingClientRect().bottom;
        this.about1 = this.about.getBoundingClientRect().top;
        this.about2 = this.about.getBoundingClientRect().bottom;
        this.skills1 = this.skills.getBoundingClientRect().top;
        this.skills2 = this.skills.getBoundingClientRect().bottom;
        this.contact1 = this.contact.getBoundingClientRect().top;
        if (this.hamburg.classList[0] == "growMenu") {
          this.hamOne.classList.add("hamColor");
          this.hamTwo.classList.add("hamColor");
          // console.log(345345345);
        } else if (this.work1 < 50 && this.work2 > 50) {
          this.hamOne.classList.add("hamColor");
          this.hamTwo.classList.add("hamColor");
        } else if (this.about1 < 50 && this.about2 > 50) {
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        } else if (this.skills1 < 50 && this.skills2 > 50) {
          this.hamOne.classList.add("hamColor");
          this.hamTwo.classList.add("hamColor");
        } else if (this.contact1 < 50) {
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        } else {
          this.hamOne.classList.remove("hamColor");
          this.hamTwo.classList.remove("hamColor");
        }
      } else {
        // console.log('no');
      }
    }
  }
};
</script>

<style lang="scss">
</style>
