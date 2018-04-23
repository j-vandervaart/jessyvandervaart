<template>

<section>
    <div class="splash">
        <div id="headerCopy">
            <h1 class="mainHdg">Full-stack Web Developer</h1>
            <p id="mainDesc">My work includes branding, designing, and developing websites and web-based apps.</p>
            <!-- <p id="myWorkButton">See my work</p> -->
            <p id="workPrompt">Check out some of my work below.</p>
        </div>
        <div id="characterDiv">
            <img id="character" src="images/character.png" alt="caricature">
        </div>
    </div>
    <div id="workListCont">
        <router-link v-for="work in works" v-bind:key="work.id" :to="`/work/${work.proj_id}`">
            <div class="workListDivs" v-bind:id="work.proj_id">
                <div class="workListImgs" v-bind:style="{ 'background-image': 'url(./images/' + work.proj_id + '.jpg)' }"></div>
                <div class="workListContent">
                    <h2>{{work.project_name}}</h2>
                    <p>{{work.desc}}</p>
                </div>
            </div>
        </router-link>
    </div>
    <footer>
            <div>
                <img src="images/Logo.svg" alt="Logo">
                <p>Website made by Jessy Vander Vaart</p>
                <p>© 2017 All Rights Reserved</p>
            </div>
    </footer>
</section>

</template>

<script>
    export default {
        name: 'works',
        props: ['works']
    }
</script>

<style lang="scss">
</style>
