<template>
    <main>
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
            axios.get('http://localhost:3000/api/work').then(function(response) {
                // console.log(response);
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
