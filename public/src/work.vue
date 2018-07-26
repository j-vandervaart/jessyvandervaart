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
                    <div @mouseenter="hoverEnter" @mouseleave="hoverLeave" class="hoverTitle">
                        <h2 class="hoverH2">{{work.project_name}}</h2>
                        <p class="hoverP">{{work.desc}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
    <section id="About">
        <div id="aboutContainer">
            <h1>A Little Bit About Me</h1>
            <div id="aboutPara">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>
            <div id="aboutImages">
                <img src="/images/shubby_bw.jpg" alt="">
                <h4>My Dog "Charlie"</h4>
                <!-- <img id="img1" src="/images/brandon.jpg" alt="River Scenery">
                <img src="/images/shubby_bw.jpg" alt="My Dog Charlie" id="img2">
                <img src="/images/canoe_bw.jpg" alt="Paddling in Northern Ontario" id="img3">
                <img src="/images/cat_bw.jpg" alt="My Cat" id="img4"> -->
                <div id="galleryButtons">
                    <div @click="changeImg" id="button0"></div>
                    <div @click="changeImg" id="button1"></div>
                    <div @click="changeImg" id="button2"></div>
                    <div @click="changeImg" id="button3"></div>
                </div>
            </div>
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
                seeMore: '',
                redDiv: '',
                galH4: '',
                galImg: '',
                eVal: '',
                galArr: [
                    [
                        '/images/shubby_bw.jpg',
                        'My Dog "Charlie"',
                    ],
                    [
                        '/images/cat_bw.jpg',
                        'My cat "Cat"'
                    ],
                    [
                        '/images/canoe_bw.jpg',
                        'Paddling at Cypress Lake'
                    ],
                    [
                        '/images/brandon.jpg',
                        'Camping in Paisley, Ontario'
                    ]
                ],

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
            },
            hoverEnter: function(e) {
                console.log(e);
                e.target.childNodes[0].classList.add("hoverTitleToggle");
                e.target.childNodes[2].classList.add("hoverTitleToggle");
            },
            hoverLeave: function(e) {
                e.target.childNodes[0].classList.remove("hoverTitleToggle");
                e.target.childNodes[2].classList.remove("hoverTitleToggle");
            },
            scrolled: function() {
                // console.log(234234);
                // this.redDiv = this.$el.querySelector("#redDiv");

                // setInterval(function() {
                //     setTimeout(function() {
                //         this.redDiv.style.opacity = "0";
                //     },0);
                //     setTimeout(function() {
                //         this.redDiv.style.opacity = "1";
                //     },2250); 
                // }, 4500);
            },
            changeImg: function(e) {
                this.eVal = e;
                this.galImg = this.$el.querySelector("#aboutImages img");
                this.galH4 = this.$el.querySelector("#aboutImages H4");
                TweenLite.to([this.galImg, this.galH4], 1, {opacity:0, right: 100, onComplete: this.test});
                // TweenLite.to([this.galImg, this.galH4], 1, {opacity:0,right:300});
            },
            test: function() {
                console.log(2342);
                TweenLite.to([this.galImg, this.galH4], 1, {opacity:1, right: 0});
                var galleryIndex = this.eVal.target.id;
                var arrayIndex = galleryIndex.slice(6);
                this.galImg.src = this.galArr[arrayIndex][0];
                this.galH4.innerHTML = this.galArr[arrayIndex][1];
            }
        },
        created: function() {
            window.addEventListener('load', this.scrolled);
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
