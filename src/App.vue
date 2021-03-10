<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './views/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

