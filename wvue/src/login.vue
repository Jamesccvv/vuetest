<template>
    <div>
        <h1>登录组件  {{msg}}</h1>



        <router-link to="/account">account</router-link>
        <router-link to="/goodsList">goodsList</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 123
            }
        },
        methods:{
            show(){
                console.log('123231')
            }
        }
    }
</script>

<style>

</style>