<template>
  <div class="movie-type">
    <nuxt-link 
      v-for="item in movieList"
      :key="item.id" 
      :to="`/movie/${$route.params.type}/${item.id}`" 
      class="movie-box">
      <img 
        :src="item.img" 
        :alt="item.title">
      <h4>电影名：{{ item.title }}</h4>
      <p>上映评分：{{ item.rating === 0 ? '暂无评分' : item.rating }}</p>
    </nuxt-link>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  layout: 'movieLayout',
  asyncData(context, callback) {
    axios.get(`/${context.route.params.type}`)
      .then( res => {7
        callback(null, {movieList: res.data})
      })
  }
}
</script>
<style scoped>
.movie-type {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.movie-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  width: 40%;
  box-shadow: 0 0 10px #bbb;
  color:rgb(0, 0, 0);
  box-shadow: none
}
.movie-box h4{
  line-height: 3;
}
.movie-box p{
  line-height: 3;
}
.movie-box:hover {
  transition: box-shadow .2s linear;
  box-shadow: rgba(0,0,0,0.3) 0px 19px 60px;
}
</style>


