<template>

<section>
    <div class="workHeaderImg" v-bind:style="{ 'background-image': 'url(/images/' + work.proj_id + '.jpg)' }"></div>
    <div class="indWorkCont">
      <div class="workTitleDiv">
        <h2>{{work.project_name}}</h2>
      </div>
      <div class="workContDiv">
        <div id="broadText">
          <h3>{{work.broad}}</h3>
          <p>{{work.main_desc}}</p>
        </div>
        <div id="techText">
          <h5>Technologies</h5>
          <p id="techPs">{{work.tech}}</p>
          <div id="projText">
            <h5>Project Type</h5>
            <p>{{work.roles}}</p>
          </div>
        </div>
        <div id="objectiveText">
          <h5>Project Examination</h5>
          <p>{{ work.obj_desc }}</p>
        </div>
        <div class="mockupDiv">
          <img v-if="work.proj_id != 'undefined'" v-bind:src="`/images/${work.proj_id}-mockup.png`" alt="">
        </div>
      </div>
      <div class="forwardDiv">
        <router-link v-on:click.native="goBack" v-bind:key="work._id" :to="`${work.proj_id}`"><div>Previous Project</div></router-link>
        <router-link v-on:click.native="goNext" v-bind:key="work.proj_id" :to="`${work.proj_id}`"><div>Next Project</div></router-link>
      </div>
    </div>
</section>
</template>

<script>
    export default {
        name: 'work',
        data() {
          return {
            work: {},
            next: ["campers-guide", "pionear-promotional-site", "pionear", "scifi-tv"],
            test: ''
          }
        },
        created() {
          var vm = this;
          var test = this.$route.params.proj_id;
          // console.log(test);
          axios.get(`/api/work/${test}`).then(function(response) {
            vm.work = response.data;
            // console.log(response);
            var index = vm.next.findIndex(x => x == response.data.proj_id);
            vm.test = index;
          });
          window.addEventListener('scroll', this.workScroll);
        },
        methods: {
          goNext: function() {
            
            this.test = this.test + 1;
            if(this.test == 4) {
              this.test = 0;
            }
            // console.log(this.next[this.test]);
            this.$router.push(''+this.next[this.test]);
          },
          goBack: function() {
            this.test = this.test - 1;
            if(this.test == -1) {
              this.test = 3;
            }
            // console.log(this.next[this.test]);
            this.$router.push(''+this.next[this.test]);
          },
          workScroll: function() {
            if(window.innerWidth > 1024) {
              console.log(window.innerHeight);
              console.log(this.$el.querySelector(".mockupDiv").getBoundingClientRect().top);
              if((window.innerHeight - this.$el.querySelector(".mockupDiv").getBoundingClientRect().top) > 100) {
                this.$el.querySelector(".mockupDiv").style.left = "0px";
                this.$el.querySelector(".mockupDiv").style.opacity = "1";
                this.$el.querySelector("#objectiveText").style.right = "0px";
                this.$el.querySelector("#objectiveText").style.opacity = "1";
              }
            }
          }
        },
        watch: {
              $route ({params}) {
                var vm = this;
                axios.get(`/api/work/${params.proj_id}`).then(function(response) {
                  vm.work = response.data;
                });
                if(window.innerWidth > 1024) {
                  this.$el.querySelector(".mockupDiv").style.left = "-1000px";
                  this.$el.querySelector(".mockupDiv").style.opacity = "0";
                  this.$el.querySelector("#objectiveText").style.right = "-1000px";
                  this.$el.querySelector("#objectiveText").style.opacity = "0";
                }
            }
        }
    }
</script>

<style lang="scss">

</style>
