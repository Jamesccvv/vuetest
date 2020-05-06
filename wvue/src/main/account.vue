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

<style scoped lang="scss">
    /*普通标签只支持普通的如果要启用 scss,less 要启用lang 属性  一般都加scoped 属性作用域  会给每个div 根节点 加一个属性*/
body{
    div{
        font-style: italic;
        color:pink;
    }
}
</style>