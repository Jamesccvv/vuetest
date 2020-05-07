<template>
    <div>
        <ul class="mui-table-view mui-table-view-chevron">

            <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.id">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.images.small">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class="mui-ellipsis">{{item.year}}--{{item.title}}</p>
                    </div>
                </a>
            </li>


        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    export default {
        name: "NewsList",
        data(){
            return {
                newList:[]
            }
        },
        methods:{
            getNewsList(){
                this.$http.post('v2/movie/new_movies?apikey=0df993c66c0c636e29ecbb5344252a4a',{})
                    .then(result => {
                        this.newList = result.body.subjects;
                    }, (res) => {
                        Toast('调用接口失败');
                    })
            }

        },
        created() {
            this.getNewsList()
        }
    }
</script>

<style scoped>

</style>