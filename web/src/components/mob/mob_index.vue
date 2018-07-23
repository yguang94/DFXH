<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        mounted() {
            this.$router.replace('/MobHome');
        }
    }
</script>