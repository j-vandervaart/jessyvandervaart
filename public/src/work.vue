<template>

<section>
    <div id="workListCont">
        <router-link v-bind:id="work.proj_id" v-for="work in works" v-bind:key="work.id" :to="`/work/${work.proj_id}`">
            <div @mouseenter="hoverOver" @mouseleave="hoverOut" class="workListFix"></div>
                <div class="workListDivs" v-bind:id="work.proj_id">
                    <div class="workListImgs" v-bind:style="{ 'background-image': 'url(./images/' + work.proj_id + '.jpg)' }"></div>
                    <div class="workListContent">
                        <h2>{{work.project_name}}</h2>
                        <p>{{work.desc}}</p>
                    </div>
                </div>
        </router-link>
    </div>
</section>

</template>

<script>
    export default {
        name: 'works',
        props: ['works'],
        data() {
            return {
                hoverEl: '',
                scrollClick: ''
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
            scrolled: function() {
                if(window.innerWidth > 1024) {
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 200) {
                        this.$el.querySelector("#pionear-promotional-site").style.left = "0px";
                        this.$el.querySelector("#scifi-tv").style.right = "0px";
                        // this.$el.querySelector("#pionear-promotional-site").style.position = "static";
                    }

                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 450) {
                        this.$el.querySelector("#campers-guide").style.left = "0px";
                        this.$el.querySelector("#pionear").style.right = "0px";
                    }
                }
                if(window.innerWidth <= 1024 && window.innerWidth > 768) {
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 0) {
                        this.$el.querySelector("#pionear-promotional-site").style.left = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 500) {
                        this.$el.querySelector("#scifi-tv").style.right = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 825) {
                        this.$el.querySelector("#campers-guide").style.left = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 1100) {
                        this.$el.querySelector("#pionear").style.right = "0px";
                    }
                }
                if(window.innerWidth <= 768) {
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 0) {
                        this.$el.querySelector("#pionear-promotional-site").style.left = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 500) {
                        this.$el.querySelector("#scifi-tv").style.right = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 900) {
                        this.$el.querySelector("#campers-guide").style.left = "0px";
                    }
                    if((window.innerHeight - this.$el.querySelector("#workListCont").getBoundingClientRect().top) > 1325) {
                        this.$el.querySelector("#pionear").style.right = "0px";
                    }
                }
                // console.log(window.innerHeight);
                // console.log(this.$el.querySelector("#workListCont").getBoundingClientRect().top);
            },
            scrollTo: function() {
                // console.log('234234');
                this.scrollClick = this.$el.querySelector("#workListCont");
                TweenLite.to(window, 1, {scrollTo:400, ease:Power2.easeOut});
            }
        },
        created: function() {
            window.addEventListener('scroll', this.scrolled);
            
        }
    }
</script>

<style lang="scss">
</style>
