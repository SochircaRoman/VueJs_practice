<template>
  <div v-if="posts.length > 0">
    <br>
    <h3>List of posts</h3>
    <transition-group name="post-list">
      <post-item 
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
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
.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
