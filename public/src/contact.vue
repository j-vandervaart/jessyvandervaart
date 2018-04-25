<template>
    <section>
        <div class="mainSec">
            <div class="header">
                <h1 class="mainHdgContact">Let's Connect!</h1>
                <p id="contactQ">If you're interested in working together fill out the form and send me a message.</p>
            </div>
            <div id="formDiv">
                <form method="POST" @submit.prevent="postMail">
                    <transition name="fade-input">
                        <p v-if="error.message == 'Please fill in all fields'">Please fill in all fields</p>
                        <p v-else-if="error.message == 'Your message has been sent!'">Your message has been sent!</p>
                    </transition>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" v-model="Email.name">
                    <label for="email">Email Address:</label>
                    <input type="text" id="email" name="email" v-model="Email.email">
                    <transition name="fade">
                        <p v-if="error.message == 'Please provide a valid email address'">Please provide a valid email address</p>
                    </transition>
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" v-model="Email.message" cols="30" rows="10"></textarea>
                    <input id="submit" type="submit" value="Send">
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'contact',
        data() {
            return {
                Email: {name: '', email: '', message: ''},
                error: {message: ''}
            };
        },
        methods: {
            postMail() {

                var newEmail = {
                    name: this.Email.name,
                    email: this.Email.email,
                    message: this.Email.message
                }
                console.log(newEmail);

                var vm = this;
                axios.post('/contact', newEmail).then(function(response){
                    console.log(response.data.response);
                    vm.error.message = response.data.response;
                });
                // this.$router.push('/work');
            }
        }
    }
</script>

<style lang="scss">

</style>
