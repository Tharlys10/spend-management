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
import { HeadersTable } from '~/@types'

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

  transactions: any = [
    {
      title: 'TRANSACTION 01',
      category: 'CATEGORY 01',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 02',
      category: 'CATEGORY 02',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#058084EE',
      category_icon: 'mdi-lock',
      type: 2,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 03',
      category: 'CATEGORY 03',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#058084EE',
      category_icon: 'mdi-plus',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 04',
      category: 'CATEGORY 04',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 05',
      category: 'CATEGORY 05',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 06',
      category: 'CATEGORY 06',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 07',
      category: 'CATEGORY 07',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 08',
      category: 'CATEGORY 08',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 2,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 09',
      category: 'CATEGORY 09',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 2,
      date: '22/01/2020'
    },
    {
      title: 'TRANSACTION 10',
      category: 'CATEGORY 10',
      category_id: '123e4567-e89b-12d3-a456-426614174000',
      category_color: '#0A8A84EE',
      category_icon: 'mdi-home',
      type: 1,
      date: '22/01/2020'
    },
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