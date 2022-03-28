<template>
  <div>
    <br>
    <h3>List of posts</h3>
      <post-item class="post" 
      v-for="post in posts"
      :post="post"
      />
  </div>
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
