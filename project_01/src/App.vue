<template>
  <div class="app">
    <h1>Page with posts</h1>
    <div>
      <my-button class="app__btns" @click="showDialog">Create post</my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="addToList"/>
    </my-dialog>
    <PostList
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>
  </div>
</template>


<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {value: "title", name: "for name"},
        {value: "body", name: "for description"},
      ]
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
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        this.posts = response.data;
      } catch (error) {
        alert("Error");
      } finally {
        this.isPostsLoading = false;
      }

    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    }
  }
}
</script>


<style>
.app {
  padding: 20px;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

</style>
