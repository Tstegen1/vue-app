<template>
  <v-app>
    <v-card>
      <v-app-bar flat color="success">
        <router-link to="/home">Home</router-link>
        <router-link to="/users">User</router-link>
      </v-app-bar>
    </v-card>
    <router-view></router-view>
    <v-footer app color="success" dark class="justify-center">
      vue-app
    </v-footer>  
  </v-app>
</template>

<script>

</script> 