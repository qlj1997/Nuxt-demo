<template>
  <div class="teacher">
    我是老师页面
    <ul>
      <li 
        v-for="item in teaList" 
        :key="item.id">
        <nuxt-link :to="`/teacher/${item.id}`">{{ item.name }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child/>
  </div>
</template>
<script>
export default {
    data() {
        return {
            teaList:[
              {id:1,"name":'jack'},
              {id:2,"name":'rose'},
              {id:3,"name":'tom'}
            ]
        }
    }
}
</script>

