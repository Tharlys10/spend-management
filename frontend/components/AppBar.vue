<template>
  <div>
    <v-app-bar
      class="app-bar"
      dense
      dark
    >
      <v-toolbar-title >
        <router-link class="link-home-page" to="/">
          <img width="25px" src="@/assets/img/icon-money.png" alt="Logo">
          <span class="font-weight-bold text-uppercase">Spend Management</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/admin">
        <v-icon>mdi-shield-account-outline</v-icon>
      </v-btn>

      <v-btn icon to="/account">
        <v-icon>mdi-account-cog-outline</v-icon>
      </v-btn>

      <v-btn icon to="/login">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

      <v-divider vertical/>

      <v-avatar class="avatar">
        <img
          class="img-avatar"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppBarComponent extends Vue {
  
}
</script>

<style>
.app-bar {
  background-image: linear-gradient(to bottom right, var(--green-default), #4FBF1F);
}

.avatar {
  border: #FFF solid 0.1rem;
  margin-left: 1rem;
}

.img-avatar {
  padding: 0.1rem
}

.link-home-page {
  text-decoration: none;
}

.v-application a {
  color: #FFF;
}
</style>