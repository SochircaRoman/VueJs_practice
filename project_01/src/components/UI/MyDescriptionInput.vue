<template>
    <textarea :value="value" @input="updateInput" cols="30" rows="10" placeholder="Description" class="descriptionInput"></textarea>
</template>

<script>
    export default {
        name: "my-description-input",
        props: {
        value: [String, Number] 
      },
      methods: {
        updateInput(event) {
          this.$emit("update:value", event.target.value);
        }
      },
    }
</script>

<style scoped>

.descriptionInput{
  width: 20%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>