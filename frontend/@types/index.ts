export interface HeadersTable {
  text: string,
  align: "center" | "left" | "right",
  sortable: boolean,
  value: string,
}

export interface LoginDto {
  mail: string,
  password: string
}

export interface CreateTransactionDto {
  id: string,
  title: string,
  type: number,
  date: string,
  category_id: string
}

export interface TransactionsDto {
  id: string,
  title: string,
  type: number,
  date: string,
  user: string,
  user_id: string,
  category: string,
  category_id: string,
  category_color: string,
  category_icon: string
}