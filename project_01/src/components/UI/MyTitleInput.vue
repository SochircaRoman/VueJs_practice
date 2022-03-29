<template>
    <input :value="value" @input="updateInput" class="titleInput" type="text">
</template>

<script>
    export default {
      name: "my-title-input",
      props: {
        value: [String, Number] 
      },
      methods: {
        updateInput(event) {
          this.$emit("update:value", event.target.value);
        }
      },
    };
</script>

<style scoped>

.titleInput{
  width: 90%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>