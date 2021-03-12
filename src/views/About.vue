<template>
  <v-main>
    <h1>
      aboutです
    </h1>
  </v-main>
</template>

<script>

export default {
  name: "about",
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
    // ログインするとtrue
      return this.$store.getters.isSignIn;
    }  
  },
};