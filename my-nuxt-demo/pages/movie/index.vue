<template>
  <div class="mymovie">
    欢迎来到电影网站
  </div>
</template>
<script>
export default {
    layout:'movieLayout',
    // seo优化
     head(){
        return{
            title:'豆瓣电影',
            meta:[{
                'name':'keywords',
                'content': '电影、经典电影、热映、电视剧、美剧、影评、电影院、电影票、排行、推荐'
            }]
        }
    }
}
</script>

