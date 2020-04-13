<template lang='pug'>
  div.home
      h1.homeTitle 影片
      div.homeContent
        div.movCard(v-for='item in movList' :key='item.id')
          nut-row
            nut-col(:span="8")
                div.flex-content 
                  div.img(:style='"background:"+item.img')
            nut-col(:span="16")
                div(class="flex-content flex-content-light")
                  h6.movCardTitle {{item.name}}
                  div.movData 
                    span.movOption {{item.option}}
                    span.movScreen {{item.screen}}
                    span.movScore {{item.score}}
                  p.story {{item.split.join('、')}}
                  p.actor {{item.actor.join('、')}}
                  nut-button(small @click='clickHandle') 购票
      Footer  
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  data(){
    return{
      movList:[
        {
          id:1,
          name:'芳华',
          img:'red',
          option:'2D',
          screen:'IMAX',
          score:'9.9分',
          split:['剧情','爱情','战争'],
          actor:['黄轩','苗苗']
        }
      ]
    }
  },
  methods:{
    clickHandle(){
      this.$router.push('/detail')
    }
  },
  components: {
    Footer
  },

  // beforeRouteEnter (to,from,next){
  //       const user = localStorage.getItem('user') //前端模拟的保存用户的登陆状态
  //       if(!user){ // 若该登录状态不存在
  //         this.$router.push('/login')
  //       }
  //       next()
  // }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  flex:1;
  background: lightgray;
  .homeTitle{
    height: 44px;
    line-height: 44px;
    color: #78a4f4;
    background: #fff;
    font-size: 16px;
    font-weight: 100;
  }
  .homeContent{
    flex: 1;
    overflow-y: auto;
  }
  .flex-content {
    line-height: 30px;
    color: #fff;
    text-align: center;
    height: 200px;
    box-sizing: border-box;
    padding: 3px;
    .img {
      height: 100%;
    }
  }
  .flex-content.flex-content-light{
    background: #93b6f6;
  }  
}
</style>
