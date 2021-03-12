<template>
    <div id="nav">
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/about">About</router-link>
      <Authentication></Authentication>
    </div>
</template>
<script>
import Authentication from "./Authentication";

export default {
  name: "navigation",
  components: {
    Authentication
  },
};
</script>
