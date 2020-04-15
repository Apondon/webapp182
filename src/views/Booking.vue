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
            span.seatsWords 可选
            span(class='iconfont choose')  &#xe69a;
            //- 已选
            span.seatsWords 已选
            span(class='iconfont choosed')  &#xe69a;
            //- 已售
            span.seatsWords 已售
            span(class='iconfont sailed')  &#xe69a;
        //-  选座情况
        div.seatsInfo 
            div.seatsTitle 已选座位
            div.ticketsBox
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
            seatsNum:35,
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
@mixin flx($direction:column){
    display:flex;
    flex:1;
    flex-direction: $direction;
}
.booking{
   @include flx;
    .movInfo{
        height: 50px;
        line-height: 25px;
        border-bottom:$border;
        text-align: left;
        padding-left:5px;
        color:darkslategrey;
        font-size:18px;
        font-weight: 600;
        .startTime{
            font-size: 14px;
            font-weight: 100;
            color:#777
        }
    }
    .roomSeats{
        @include flx;
        background: #f1f1f1;
        .screen{
            padding:3px 12px;
            background: darkturquoise;
        }
        .seatsContainer{
            @include flx(row);
            width:100%;
            justify-content: center;
            box-sizing: border-box;
            padding: 8px;
            flex-wrap:wrap;
            align-items:flex-start;
            .iconfont{
                font-size: 34px;
            }
        }
    }
    .seatsState{
        height: 30px;
        line-height: 30px;
        .iconfont{
            font-size: 20px;
        }
        .choosed{
            color:lime
        }
        .sailed{
            color:mediumvioletred;
        }
        
    }
    .seatsInfo{
        height: 130px;
        @include flx;
        .seatsTitle{
            text-align: left;
            height: 30px;
        }
        .ticketsBox{
            @include flx(row);
            overflow-y: auto;
            flex-wrap:wrap;
            align-items:flex-start;
            .seatsItem{
                width:30%;
                height: 50px;
                background: chocolate;
            }
        }

    }
    .payButton{
        height: 40px;
        line-height: 40px;
        background: darkcyan;
        color:#fff;
    }
}
</style>