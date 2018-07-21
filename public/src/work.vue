<template>

<section>
    <section id="splashSection">
        <div id="splashWords">
            <div id="nameDesc">
                <h1>Jessy Vander Vaart</h1>
                <h2>Designer and Full Stack Web Developer</h2>
            </div>
            <div id="grayDivide"></div>
            <div id="missionState">
                <p>Striving to Build creative, Performant, and Modern Websites and Applications.</p>
            </div>
        </div>
        <div id="bottomDivide"></div>
        <div id="seeMore" @click="scrollTo">
            <p>See More</p>
            <img src="/images/downArrow.svg" alt="">
        </div>
    </section>
    
    <section id="Work">
        <div id="workContainer">
            <h1>My Favourite Work</h1>
            <div></div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div id="workListContainer">
            <router-link class="workAnchors" v-for="work in works" v-bind:key="work.id" :to="`/work/${work.proj_id}`">
                <div class="workSquares" v-bind:id="work.proj_id" v-bind:style="{ 'background-image': 'url(./images/' + work.proj_id + '.jpg)' }">
                    <!-- <div class="workListImgs" v-bind:style="{ 'background-image': 'url(./images/' + work.proj_id + '.jpg)' }"></div> -->
                    <!-- <div class="workListContent">
                        <h2>{{work.project_name}}</h2>
                        <p>{{work.desc}}</p>
                    </div>
 -->            </div>
            </router-link>
        </div>
    </section>
</section>

</template>

<script>
    export default {
        name: 'works',
        props: ['works'],
        data() {
            return {
                hoverEl: '',
                scrollClick: '',
                nameDesc: '',
                grayDivide: '',
                missionState: '',
                bottomDivide: '',
                seeMore: ''
            }
        },
        methods: {
            hoverOver: function(e) {
                this.hoverEl = e.target.nextElementSibling.childNodes[2];
                this.hoverEl.style.backgroundColor = "#91CCC8";
            },
            hoverOut: function(e) {
                this.hoverEl.style.backgroundColor = "transparent";
            },
            scrollTo: function() {
                this.scrollClick = this.$el.querySelector("#Work");
                TweenLite.to(window, 1.5, {scrollTo: this.scrollClick, ease:Power2.easeOut});
            }
        },
        created: function() {
            window.addEventListener('scroll', this.scrolled);
        },
        mounted: function() {
            this.nameDesc = this.$el.querySelector("#nameDesc");
            this.grayDivide = this.$el.querySelector("#grayDivide");
            this.missionState = this.$el.querySelector("#missionState");
            this.bottomDivide = this.$el.querySelector("#bottomDivide");
            setTimeout(function(){ 
                this.nameDesc.style.opacity = "1";
            }, 50);
            setTimeout(function(){
                if(window.innerWidth <= 1024) {
                    this.grayDivide.style.width = "100%";
                }else {
                    this.grayDivide.style.maxHeight = "600px";
                }
            }, 800);
            setTimeout(function(){ 
                this.missionState.style.opacity = "1";
            }, 3000);
            setTimeout(function(){ 
                this.missionState.style.right = "0";
            }, 3000);
            setTimeout(function(){ 
                this.bottomDivide.style.width = "100%";
            }, 1500);
        }
    }
</script>

<style lang="scss">
</style>
