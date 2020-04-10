<template lang='pug'>
  div#app
      div#head 头部
      //- div#nav
        
      //-     router-link(to="/")
      //-     router-link(to="/about")
      router-view
</template>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
html,body{
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  #head{
    height: 44px;
    line-height: 44px;
    color: #fff;
    background:#78a4f4;
  }
}


</style>
