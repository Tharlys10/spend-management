<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="transactions"
      no-data-text="Nenhuma transação encontrada"
      hide-default-footer
    >
      <template v-slot:[`item.category`]="{ item }">
        <v-chip
          :color="item.category_color"
          dark
        >
          <v-icon left>{{ item.category_icon }}</v-icon> {{ item.category }}
        </v-chip>
      </template>
      <template v-slot:[`item.type`]="{ item }">
        <v-chip
          :color="getColorTypeTransaction(item.type)"
          dark
        >
          <v-icon left>{{ item.type == 1 ? 'mdi-cash-plus' : 'mdi-cash-minus' }}</v-icon> {{ item.type == 1 ? 'ENTRADA' : 'SAÍDA' }}
        </v-chip>
      </template>
    </v-data-table>
    <v-pagination
      class="my-3"
      v-model="page"
      :length="10"
      :total-visible="7"
      circle
    ></v-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { HeadersTable, TransactionsDto } from '~/@types'

@Component
export default class TableTransactionsComponent extends Vue {
  private headers: HeadersTable[] = [
    {
      text: 'Titulo',
      align: 'center',
      sortable: false,
      value: 'title',
    },
    {
      text: 'Categoria',
      align: 'left',
      sortable: false,
      value: 'category',
    },
    {
      text: 'Tipo',
      align: 'left',
      sortable: false,
      value: 'type',
    },
    {
      text: 'Data',
      align: 'left',
      sortable: false,
      value: 'date',
    },
  ];

  transactions: TransactionsDto[] = [
    {
      id: '123e4567-e89b-12d3-a456-426614174000',
      title: 'TRANSACTION 01',
      type: 1,
      date: '22/01/2020',
      user: 'THARLYS ALVES DE ALMEIDA',
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      category: 'CATEGORY 01',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home'
    },
    {
      id: '123e4567-e89b-12d3-a456-426614174000',
      title: 'TRANSACTION 02',
      type: 2,
      date: '22/01/2020',
      user: 'THARLYS ALVES DE ALMEIDA',
      user_id: '123e4567-e89b-12d3-a456-426614174000',
      category: 'CATEGORY 01',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home'
    }
  ]

  getColorTypeTransaction(type: number){
    switch (type) {
      case 1:
        return '#008000'
      case 2:
        return '#800000'
      default:
        return '#808080'
    }
  }
}
</script>