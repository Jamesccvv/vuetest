<template>
    <div>评论 {{newsId}}</div>
</template>

<script>
    export default {
        name: "comment",
        data(){
            return {
                comment:[]
            }
        },
        created(){
            this.getComment();
        },
        methods:{
            getComment() {

                this.comment = [];
                // this.$http.get('v2/movie/subject/'+this.id+'/reviews',{}).then(result=>{
                //     this.newsInfo= this.newsInfo.concat(result.body.reviews)
                //
                // })
            }
        },
        props:["newsId"]
    }
</script>

<style scoped>

</style>