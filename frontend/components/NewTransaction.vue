<template>
  <div>
    <v-card
      outlined
    >
      <v-card-title class="text-uppercase headline lighten-2 card-new-transaction">
        Nova transação
        <v-spacer></v-spacer>
        <v-btn
          class="btn-new-transaction"
          icon
          dark
          small
          @click="close"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-5">
        <v-form v-model="validFormNewTransaction">
          <v-row>
            <v-col class="my-0 py-0" cols="12" xs="12" md="7">
              <v-text-field
                v-model="title"
                label="Titulo"
                :rules="[
                  v => !!v || 'Titulo é obrigatório'
                ]"
                color="var(--green-default)"
                append-icon="mdi-subtitles"
                outlined
              />
            </v-col>
            <v-col class="my-0 py-0" cols="12" xs="12" md="5">
              <v-autocomplete
                v-model="category_id"
                label="Categoria"
                :rules="[
                  v => !!v || 'Categoria é obrigatória'
                ]"
                color="var(--green-default)"
                append-icon="mdi-folder-open-outline"
                outlined
                no-data-text="Nenhuma categoria encontrada"
              />
            </v-col>
            <v-col class="my-0 py-0" cols="12" xs="12" md="6">
              <v-select
                v-model="type"
                label="Tipo"
                :items="[
                  {
                    key: 1,
                    label: 'ENTRADA'
                  },
                  {
                    key: 2,
                    label: 'SAÍDA'
                  }
                ]"
                item-text="label"
                item-value="key"
                :rules="[
                  v => !!v || 'Tipo é obrigatório'
                ]"
                color="var(--green-default)"
                append-icon="mdi-transcribe-close"
                outlined
              />
            </v-col>
            <v-col class="my-0 py-0" cols="12" xs="12" md="6">
              <v-menu
                v-model="menuDatePicker"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="computedDateFormatted"
                    label="Data"
                    persistent-hint
                    :rules="[
                      v => !!v || 'Data é obrigatório'
                    ]"
                    append-icon="mdi-calendar"
                    outlined
                    color="var(--green-default)"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  locale="pt-br"
                  color="var(--green-default)"
                  @input="menuDatePicker = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
    
        <v-btn
          color="var(--green-default)"
          text
          :disabled="!validFormNewTransaction"
        >
          Finalizar
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class NewTransactionComponent extends Vue {
  validFormNewTransaction: boolean = false

  menuDatePicker: boolean = false
  date: string = new Date().toISOString().substr(0, 10)

  title: string = ''
  category_id: string = ''
  type: number = 0

  get computedDateFormatted () {
    return this.formatDate(this.date)
  }

  formatDate (date: string) {
    if (!date) return null

    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
  }

  close(){
    this.title = ''
    this.category_id = ''
    this.type = 0
    this.date = new Date().toISOString().substr(0, 10)

    this.$emit('commit-close')  
  }
}
</script>

<style>
.card-new-transaction {
  background-image: linear-gradient(to bottom right, var(--green-default), #4FBF1F);

  color: #FFF;
  margin: 0;
}

.btn-new-transaction {
  background-color: var(--red-default);
}

</style>