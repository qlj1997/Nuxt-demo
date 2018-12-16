<template>
  <div class="movie">
    <!-- 头部 -->
    <Nav/>
    <nuxt/>
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
export default {
    components: {
      Nav
    }
}
</script>

<style scoped>
.movie{
  padding-top: 70px;
}
</style>
