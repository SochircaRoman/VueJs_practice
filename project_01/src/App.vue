<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-button @click="showDialog">Create post</my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="addToList"/>
    </my-dialog>
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
    PostList,
    PostForm,
},
  data() {
    return {
      posts: [
        {id: 1, title: "JavaScript 1", body: "JavaScript description"},
        {id: 2, title: "JavaScript 2", body: "JavaScript description"},
        {id: 3, title: "JavaScript 3", body: "JavaScript description"},
      ],
      dialogVisible: false,
    }
  },
  methods: {
    addToList(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    }
  },
}
</script>


<style>

</style>
