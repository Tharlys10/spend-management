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