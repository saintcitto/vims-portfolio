<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/SiteHeader.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Montserrat Alternates", sans-serif;
  background-color: black;
  color: white;
}
</style>
