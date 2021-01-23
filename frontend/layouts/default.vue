<template>
  <v-app dark>
    <v-main>
      <v-container class="container" fluid>
        <AppBar v-if="$route.path != '/login' && $route.path != '/register'"/>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  
</script>

<style>
  .container {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
</style>
