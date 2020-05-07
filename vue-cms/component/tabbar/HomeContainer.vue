<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        HomeContainer
    </div>
</template>

<script>

    export default {
        name: "HomeContainer"
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    /* .mint-swipe-item:nth-child(1){
         background-color: red;
     }*/

    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2){
            background-color: green;
        }
        &:nth-child(3){
            background-color: blue;
        }
    }
</style>