<template>
  <div>
    <CardsViewSpend/>

    <v-row>
      <v-col class="pa-7" cols="12" xs="12" md="6">
        <v-card
          class="mx-auto px-5"
          elevation="5"
          outlined
        >
          <div class="menu-transaction">
            <h2 class="text-uppercase">Transações</h2>
            <v-btn @click="dialogNewTransaction = true" text class="button-menu-transaction">
              <v-icon>mdi-plus</v-icon>
              Nova transação
            </v-btn>
          </div>
          <TableTransactions />
        </v-card>
      </v-col>
      <v-col class="pa-7" cols="12" xs="12" md="6">
        <v-card
          class="mx-auto px-5"
          elevation="5"
          outlined
        >
          <h2 class="text-uppercase">Grafico</h2>
          
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialogNewTransaction" max-width="600">
      <NewTransaction 
        v-if="dialogNewTransaction"
        v-on:commit-close="dialogNewTransaction = false"
      />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class HomePage extends Vue {
  dialogNewTransaction: boolean = false
}
</script>

<style>
.menu-transaction {
  display: flex;
  justify-content: space-between;
}

.button-menu-transaction{
  margin-top: 3.2rem;
  margin-bottom: 0.8rem;
}
</style>