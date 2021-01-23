<template>
  <div>
    <v-row>
      <v-col class="pa-7" cols="12" xs="12" md="4">
        <v-card
          class="mx-auto pa-5"
          elevation="5"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card-title mb-1">
                ENTRADA
              </v-list-item-title>
              <v-list-item-subtitle class="card-subtitle">
                R$ 1000.00
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
            >
              <v-icon size="50" color="#008000">mdi-cash-plus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col class="pa-7" cols="12" xs="12" md="4">
        <v-card
          class="mx-auto pa-5"
          elevation="5"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card-title mb-1">
                SAÍDA
              </v-list-item-title>
              <v-list-item-subtitle class="card-subtitle">
                R$ 1500.00
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
            >
              <v-icon size="50" color="#800000">mdi-cash-minus</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col class="pa-7" cols="12" xs="12" md="4">
        <v-card
          class="mx-auto pa-5"
          elevation="5"
          outlined
          color="#800000"
          dark
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="card-title mb-1">
                TOTAL
              </v-list-item-title>
              <v-list-item-subtitle class="card-subtitle">
                R$ -500.00
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
            >
              <v-icon size="50">mdi-cash-register</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CardsViewSpendComponent extends Vue {

}
</script>

<style>
.card-title {
  font-weight: normal;
  font-size: 1rem;
}

.card-subtitle {
  font-size: 2rem;
  line-height: 3rem;
  margin-top: 1rem;
}
</style>