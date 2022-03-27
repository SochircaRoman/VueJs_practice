<template>

  <div class="post" v-for="post in posts" :key="id">
    <div>({{post.id}})<strong>{{post.title}}</strong> - {{post.body}}</div>
  </div>
</template>


<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    } 
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>
