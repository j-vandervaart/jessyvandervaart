<template>
<div>
        <div>
            <p>{{work.project_name}}</p>
        </div>
</div>
</template>

<script>
    export default {
        name: 'work',
        data() {
          return {
            work: {}
          }
        },
        created() {
          var vm = this;
          var test = this.$route.params.proj_id;
          // console.log(test);
          axios.get(`/api/work/${test}`).then(function(response) {
            vm.work = response.data;
            // console.log(response);
          });
        }
    }
</script>

<style lang="scss">

</style>
