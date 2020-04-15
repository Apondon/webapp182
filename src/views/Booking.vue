<template lang="pug">
    div.booking
        //- 电影相关信息
        div.movInfo {{name}}
            div.startTime {{startTime}}
        //- 影厅座位分布
        div.roomSeats
            //- 屏幕
            span.screen {{room}}
            //- 座位
            div.seatsContainer
                span.iconfont(v-for='n in seatsNum',:key='n') &#xe69a;
        //- 座位状态显示
        div.seatsState 
            //- 可选
            span(class='iconfont choose')  &#xe69a;
            //- 已选
            span(class='iconfont choosed')  &#xe69a;
            //- 已售
            span(class='iconfont sailed')  &#xe69a;
        //-  选座情况
        div.seatsInfo 
            div.seatsTitle 已选座位
            div.seatsItem 
                div.seats  一排一座
                div.price  10
        //- 结算按钮
        div.payButton {{`${total}确认选座`}}
</template>
<script>
export default {
    data(){
        return{
            name:'',// 电影名
            startTime:'今天10:30',// 电影开始时间
            room:'',//放映厅
            seatsNum:10,
            total:10,//所选座位的总价
        }
    },
    mounted(){
        const data = this.$route.params
        console.log(data)
        this.name = data.name
        this.room = data.room
    }   
}
</script>
<style lang="scss" scoped>
$border:1px solid #000;
.booking{
    display:flex;
    flex:1;
    flex-direction: column;
    .movInfo{
        height: 50px;
        border-bottom:$border;
    }
    .roomSeats{
        flex:1;
        background: lightslategrey;
    }
    .seatsState{
        height: 30px;
    }
    .seatsInfo{
        height: 130px;
        overflow-y: auto;
    }
    .payButton{
        height: 40px;
        line-height: 40px;
        background: darkcyan;
        color:#fff;
    }
}
</style>