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
            <h1>My Projects</h1>
            <div></div>
            <p>My website development work includes designing and building responsive, front-end website interfaces, as well as creating functional, scalable back-end solutions. I work to continually learn and integrate modern technologies into my projects so that my work can provide clients with highly stylized, performance-driven websites and web applications.</p>
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
            <pre>A Little Bit 
About Me</pre>
            <div id="aboutPara">
                <p>I am a website designer and developer based in London, Ontario. My passion for web development stems from my overarching passion for being a maker. As a self-professed "maker", I get passionate about creating things, physical or digital, that are both functional and aesthetically appealing. As a web developer, that passion drives me to continually learn and leverage technologies that might make my work more enjoyable, memorable, and performant.</p>
            </div>
            <div id="aboutImages">
                <img src="/images/shubby_bw.jpg" alt="">
                <h4>My Dog "Charlie"</h4>
                <!-- <img id="img1" src="/images/brandon.jpg" alt="River Scenery">
                <img src="/images/shubby_bw.jpg" alt="My Dog Charlie" id="img2">
                <img src="/images/canoe_bw.jpg" alt="Paddling in Northern Ontario" id="img3">
                <img src="/images/cat_bw.jpg" alt="My Cat" id="img4"> -->
                <div id="galleryButtons">
                    <div class="buttonsInact active" id="button0"></div>
                    <div class="buttonsInact" id="button1"></div>
                    <div class="buttonsInact" id="button2"></div>
                    <div class="buttonsInact" id="button3"></div>
                </div>
            </div>
        </div>
    </section>
    <section id="Skills">
        <div id="skillsSec">
            <h1>Skills</h1>
            <div id="skillsUnderline"></div>
            <h2>Code</h2>
            <div class="skillDivs">
                <div>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>Sass</p>
                </div>
                <div>
                    <p>MongoDB</p>
                    <p>PHP</p>
                    <p>MySql</p>
                </div>
                <div>
                    <p>JavaScript</p>
                    <p>Vue JS</p>
                    <p>Node JS</p>
                </div>
                <div>
                    <p>Laravel</p>
                    <p>wepback</p>
                </div>
            </div>
            <h2>Tools</h2>
            <div class="skillDivs">
                <div>
                    <p>Adobe XD</p>
                    <p>Sketch</p>
                    <p>Photoshop</p>
                </div>
                <div>
                    <p>Illustrator</p>
                    <p>GitHub</p>
                    <p>Invision</p>
                </div>
            </div>
        </div>
        <div id="eduSec">
            <h1>Education</h1>
            <div id="eduUnderline"></div>
            <div class="eduDivs">
                <div>
                    <h3>Fanshawe College</h3>
                    <p>Graduate Diploma, Interactive Media Specialist</p>
                </div>
                <div>
                    <h3>Western University</h3>
                    <p>BA, Media Studies</p>
                </div>
                <div>
                    <h3>Fanshawe College</h3>
                    <p>Diploma, Television Broadcasting</p>
                </div>
            </div>
        </div>
    </section>
    <section id="Contact">
        <pre>Contact 
Me</pre>
        <div id="contactBlurb">
            <p>Please feel free to send me an email to inquire about any of my work, or to discuss the possibility of working together.</p>
            <div></div>
        </div>
        <div id="formDiv">
            <form method="POST" @submit.prevent="postMail">
                <transition name="fade-input">
                    <p v-if="error.message == 'Please fill in all fields'">Please fill in all fields</p>
                    <p v-else-if="error.message == 'Your message has been sent!'">Your message has been sent!</p>
                </transition>
                <label for="name">Name:</label>
                <input autocomplete="name" type="text" id="name" name="name" v-model="Email.name">
                <transition name="fade">
                    <p v-if="error.message == 'Please provide a valid email address'">Please provide a valid email address</p>
                </transition>
                <label for="email">Email Address:</label>
                <input autocomplete="email" type="text" id="email" name="email" v-model="Email.email">
                <label for="message">Message:</label>
                <textarea name="message" id="message" v-model="Email.message" cols="30" rows="10"></textarea>
                <input id="submit" type="submit" value="Send">
            </form>
        </div>
    </section>
    <section id="footer">
        <img src="/images/b&wLogo.png" alt="Black and White Logo">
        <p>Website Made by Jessy Vander Vaart</p>
        <p>© 2018 All Rights Reserved</p>
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
                galDivs: '',
                galleryIndex: '',
                arrayIndex: '',
                imgIncrement: '',
                activeOne: '',
                activeOneId: '',
                babb: '',
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
                        'Backcountry camping in Algonquin Provincial Park'
                    ],
                    [
                        '/images/brandon.jpg',
                        'Friends and Hawaiian shirts!'
                    ]
                ],
                about: '',
                about1: '',
                about2: '',
                Email: {name: '', email: '', message: ''},
                error: {message: ''},
                timerValue: ''
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
                e.target.childNodes[0].classList.add("hoverTitleToggle");
                e.target.childNodes[2].classList.add("hoverTitleToggle");
            },
            hoverLeave: function(e) {
                e.target.childNodes[0].classList.remove("hoverTitleToggle");
                e.target.childNodes[2].classList.remove("hoverTitleToggle");
            },
            galleryTimer: function() {
                this.about = this.$el.querySelector("#About");
                this.about1 = this.about.getBoundingClientRect().top;
                this.about2 = this.about.getBoundingClientRect().bottom;
                this.timerValue = 4500;
                setInterval(this.timer, this.timerValue);
            },
            timer: function() {

                this.galDivs = this.$el.querySelectorAll(".buttonsInact");
                this.galImg = this.$el.querySelector("#aboutImages img");
                this.galH4 = this.$el.querySelector("#aboutImages H4");
                this.activeOne = this.$el.querySelector(".active");

                // this.activeOne.style.width = "23%";
                // this.activeOne.style.marginRight = "0%";
                this.activeOneId = parseInt(this.activeOne.id.slice(6));

                if(this.activeOneId == 3) {
                        this.activeOneId = -1;
                }
                this.babb = this.activeOneId+1;
                for(var i=0; i < this.galDivs.length; i++) {
                    this.galDivs[i].classList.remove("active");
                    // this.galDivs[i].style.width = "1%";
                    // this.galDivs[i].style.marginRight "22%";
                }
                this.galDivs[this.babb].classList.add("active");

                
                this.galImg.src = this.galArr[this.babb][0];
                this.galH4.innerHTML = this.galArr[this.babb][1];
            },
            changeImg: function(e) {
                clearInterval(this.timer);
                this.galDivs = this.$el.querySelectorAll(".buttonsInact");
                this.eVal = e;
                this.galImg = this.$el.querySelector("#aboutImages img");
                this.galH4 = this.$el.querySelector("#aboutImages H4");
                for(var i=0; i < this.galDivs.length; i++) {
                    this.galDivs[i].classList.remove("active");
                }
                e.target.classList.add("active");
                TweenLite.to([this.galImg, this.galH4], .4, {opacity:0, onComplete: this.fadeImg});
            },
            fadeImg: function() {
                TweenLite.to([this.galImg, this.galH4], .4, {opacity:1, right: 0});
                this.galleryIndex = this.eVal.target.id;
                this.arrayIndex = this.galleryIndex.slice(6);
                this.galImg.src = this.galArr[this.arrayIndex][0];
                this.galH4.innerHTML = this.galArr[this.arrayIndex][1];
            },
            postMail() {

                var newEmail = {
                    name: this.Email.name,
                    email: this.Email.email,
                    message: this.Email.message
                }
                // console.log(newEmail);

                var vm = this;
                axios.post('/contact', newEmail).then(function(response){
                    // console.log(response.data.response);
                    vm.error.message = response.data.response;
                });
                // this.$router.push('/work');
            }
        },
        mounted: function() {
            this.nameDesc = this.$el.querySelector("#nameDesc");
            this.grayDivide = this.$el.querySelector("#grayDivide");
            this.missionState = this.$el.querySelector("#missionState");
            this.bottomDivide = this.$el.querySelector("#bottomDivide");
            setTimeout(this.galleryTimer, 1);
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
            }, 2500);
            setTimeout(function(){ 
                this.missionState.style.right = "0";
            }, 2500);
            setTimeout(function(){ 
                this.bottomDivide.style.width = "100%";
            }, 1500);
        }
    }
</script>

<style lang="scss">
</style>
