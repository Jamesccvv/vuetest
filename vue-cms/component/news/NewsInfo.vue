<template>
    <div><!--info-&#45;&#45;{{id}} -->  <!--$route.params.id-->

        <ul class="mui-table-view mui-table-view-chevron">

            <li class="mui-table-view-cell mui-media" v-for="item in newsInfo" :key="item.id">
                <div class="mui-media-body">
                    {{item.summary}}
                    <p class="mui-ellipsis">{{item.author.name}} 发表于：{{item.created_at}}</p>
                </div>
            </li>

        </ul>


        <!--评论-->
        <comment-box :newsId="this.id"></comment-box>

    </div>
</template>

<script>

    import comment from '../subcomponent/comment.vue'

    export default {
        name: "NewsInfo",
        data() {
            return {
                id: this.$route.params.id,
                newsInfo: []
            }
        },
        created() {
            this.getNewInfo();
        },
        methods: {
            getNewInfo() {
                this.$http.get('v2/movie/subject/' + this.id + '/reviews', {}).then(result => {
                    this.newsInfo = result.body.reviews

                })
            }
        },
        components: { // 注册子组件
            'comment-box': comment
        }
    }
</script>

<style scoped>

</style>