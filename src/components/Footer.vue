<template lang="pug">
    div.footer
        nut-row
            nut-col(:span="8")
                div(@click='clickHandle("mov")') 电影
            nut-col(:span="8")
                div(@click='clickHandle("order")') 订单
            nut-col(:span="8")
                div(@click='clickHandle("my")') 我的    
</template>
<script>
export default {
    name:'Footer',
    props:{
        flag:{
            type:String
        }
    },
    methods:{
        clickHandle(str){
            if(str === 'mov') this.$router.push('/')
            if(str === 'order') this.$router.push('/order')
            if(str === 'my') this.$router.push('/user')
        }
    }
    
}
</script>
<style lang="scss">
.footer{
    height: 44px;
    line-height: 44px;
    background: #78a4f4;
    color: #ffffff;
}
</style>