<template>
    <main>
        <header>
          <div id="headerDiv">
                <img id="logoImage" src="images/Logo.svg" alt="Logo">
            <p id="logoText">Jessy Vander Vaart</p>
            <nav>
              <img id="hamburger" src="images/hamburger.svg" alt="Hamburger Menu">
              <ul class="mainNav">
                <router-link class="mainLinks" id="workNav" :to="`/work`">Work</router-link>
                <router-link class="mainLinks" id="aboutNav" :to="`/about`">About</router-link>
                <router-link class="mainLinks" id="contactNav" :to="`/contact`">Contact</router-link>
              </ul>
            </nav>
          </div>
          <hr>
        </header>
            <transition name="fade">
                <router-view v-bind:works="works">
                </router-view>
            </transition>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {works: []}
        },
        created: function() {
            var vm = this;
            axios.get('http://localhost:8080/api/work').then(function(response) {
                console.log(response);
                vm.works = response.data;
            });
        }
        // beforeUpdate: function() {
        //     if(this.$route.fullPath == '/about') {
        //         document.querySelector('#aboutNav').classList.add('menuChange');
        //     }else if(this.$route.fullPath == '/contact') {
        //         document.querySelector('#contactNav').classList.add('menuChange');
        //     }else {
        //         console.log('else');
        //     }

        // }
    }
</script>

<style lang="scss">

</style>
