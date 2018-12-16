<template>
  <div class="movie-header">
    <ul>
      <li>
        <nuxt-link to="/movie/in_theaters">正在热映</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/movie/coming_soon">即将上映</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/movie/top250">top250</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.movie-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1e2736;
  margin: 0;
  list-style: none;
}
li a {
  padding: 20px;
  display: block;
  line-height: 30px;
  height: 30px;
  position: relative;
  color: white;
}
ul>li:hover>a:before,
ul>li:hover>a{
transform: scale3d(1, 1, 1);
color: #ff7d0b;
}
ul>li>a:before{
position: absolute;
z-index: 1;
left: 0px;
bottom: 0px;
display: inline-block;
height: 4px;
width: 100%;
background-color: #ed6d00;
content: "";
transform: scale3d(0, 1, 1);
transform-origin: center;
transition: all 0.5s;
}

</style>
