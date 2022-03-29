<template>
  <div class="app">
    <PostForm
      @create="addToList"
    />
    <PostList
      :posts="posts"
      @remove="removePost"
    />
  </div>
</template>


<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
        {id: 1, title: "JavaScript 1", body: "JavaScript description"},
        {id: 2, title: "JavaScript 2", body: "JavaScript description"},
        {id: 3, title: "JavaScript 3", body: "JavaScript description"},
      ],
    }
  },
  methods: {
    addToList(post) {
      this.posts.push(post);
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
  },
}
</script>


<style>

</style>
