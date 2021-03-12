<template>
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
};
</script>
