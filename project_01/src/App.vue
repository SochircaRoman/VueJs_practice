<template>
  <div class="app">
    <h1>Page with posts</h1>
    <my-title-input
      v-model:value="searchQuery"
      placeholder="Title search..."
    />
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
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Loading...</div>

    <div class="page__wrapper">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
          'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </div>
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
      searchQuery: "",
      page: 1,
      pagePostsLimit: 10,
      totalPages: 0,
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.pagePostsLimit)
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
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.includes(this.searchQuery));
    }
  },
  watch: {
    page() {
      this.fetchPosts();
    }
  },
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

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

</style>
