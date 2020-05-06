<template>
    <div>
        <h1>这是account</h1>

        <router-link to="/account/subLogin">sub login</router-link>
        <router-link to="/account/subRegister">sub register</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "account"
    }
</script>

<style scoped>

</style>