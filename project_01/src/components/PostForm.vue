<template>
    <form @submit.prevent>
    <div><strong>Create post</strong></div>
    <my-title-input
    v-model:value="post.title"
    type="text"
    placeholder="Title"/>
    <br>
    <my-description-input 
    v-model:value="post.body"
    ></my-description-input>
    <br>
    <my-button
    class="btn"
    @click="addPostToList"
    >Push</my-button>
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
        };
    },
    methods: {
        addPostToList() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        }
    },
}
</script>


<style scoped>

</style>