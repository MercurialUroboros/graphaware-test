export interface TableRow {
  data: Record<string, string>,
  kids: Record<string, { records: TableRow[] }>
}

export type Kids = TableRow['kids']

export type Data = TableRow['data']
