<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
export default {
  name: "MyLayout",
  data: () => {
    return {
      greeting: "Yup",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
