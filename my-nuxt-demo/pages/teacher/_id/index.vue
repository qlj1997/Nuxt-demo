<template>
  <div class="student">
    {{ $route.params.id }}
    我是老师详情页面
  </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    // 在这个方法中无法获取到this
    validate(value){
      console.log(value)
      return /^\d+$/.test(value.params.id)
    }
}
</script>

