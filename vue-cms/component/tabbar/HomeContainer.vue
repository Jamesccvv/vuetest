<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swing" :key="item.subject.id">
                <img :src="item.subject.images.large" :alt="item.subject.title">
            </mt-swipe-item>

        </mt-swipe>

        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">Home</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">Email</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">Chat</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">location</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">Search</div>
            </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">Phone</div>
            </a></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        name: "HomeContainer",
        data() {
            return {
                swing: []
            }
        },
        created() {
            this.getSwipe();
        },
        methods: {
            getSwipe() {
                this.$http.post('https://douban.uieee.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a', {name: '成龙'})
                    .then(result => {
                        this.swing = result.body.subjects;
                    }, (res) => {
                        Toast('调用接口失败');
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
        color: #fff;
        text-align: center;
        margin-bottom: 20px;
    }

    /* .mint-swipe-item:nth-child(1){
         background-color: red;
     }*/

    /*    .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }

            &:nth-child(2) {
                background-color: green;
            }

            &:nth-child(3) {
                background-color: blue;
            }
        }*/

    .mui-grid-view.mui-grid-9 {
        border-top: none;
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
</style>