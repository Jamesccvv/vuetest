<template>
    <div>
        <h1>这是sub login</h1>
<!--为什么直接能用-->
        <mt-button size="small" type="default" @click="show">default</mt-button>
        <mt-button plain type="primary">primary</mt-button>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>
        <buttion>213432</buttion>
    </div>
</template>

<script>
    /*必须要导入*/
    import { Toast } from 'mint-ui';
 export default {
     data(){
         return {
             toastinit:null
         };
     },
     created(){
         this.getList()
     },
     methods:{
         show(){
             this.toastinit = Toast({
                 message: '提示',
                 duration: -1
             });
         },
         getList(){

             this.show();
             setTimeout(()=>{
                     this.toastinit.close()
                 }
             ,1000);
             // var that = this // 解决
             // setTimeout(function () {
             //     that.toastinit.close()// this 会改变作用域所以使用箭头函数
             // },2000)
         }
     }
 }
</script>

<style scoped>
div{
   color:red;
}
</style>