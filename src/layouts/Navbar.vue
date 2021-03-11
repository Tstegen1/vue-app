<!-- 共通のレイアウト部分 -->
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        vue-app
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/home" class="link">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/users" class="link">User</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view></router-view>
    <v-footer app color="primary" dark class="justify-center">
      vue-app
    </v-footer>
  </v-app>
</template>

<script>

</script> 

<style scoped>
.link {
  color: #fff;
}
</style>