<template>
    <form @submit.prevent>
    <h4>Create post</h4>
    <input
    v-model="post.title"
    type="text" 
    placeholder="Title" 
    class="titleInput">
    <br>
    <textarea
    v-model="post.body"
    cols="30"
    rows="10"
    placeholder="Description"
    class="descriptionInput"></textarea>
    <br>
    <button
    class="btn"
    @click="addPostToList"
    >Push</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      }
    }
  },
  methods: {
    addPostToList() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      }
    }
  },        
}
</script>


<style scoped>
.titleInput{
  width: 20%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.descriptionInput{
  width: 20%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

.btn{
  margin-top: 15px;
  width: 10%;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

</style>