<script>
export default {
  data: () =>  {
    return {
      posts: [
        {id: 1, title: "JavaScript 1", body: "JavaScript description"},
        {id: 2, title: "JavaScript 2", body: "JavaScript description"},
        {id: 3, title: "JavaScript 3", body: "JavaScript description"},
      ]
    }
  }
}
</script>

<template>
  <div class="post" v-for="post in posts" :key="photo">
    <div><strong>{{post.title}}</strong> - {{post.body}}</div>
  </div>
</template>

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
