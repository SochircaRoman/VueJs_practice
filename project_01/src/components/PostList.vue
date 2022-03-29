<template>
  <div v-if="posts.length > 0">
    <br>
    <h3>List of posts</h3>
      <post-item 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
  </div>
  <h3 v-else>Empty list</h3>
</template>


<script>
import PostItem from "./PostItem.vue";
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    },
    components: { PostItem }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
