import { http } from '../http-client'
import type { TableRow } from '../types'

export const getTableData = async (datasetNumber = 1) => {
  try {
    // Emulating call from a server rather than importing the json
    return (await http.get<TableRow[]>(`mock/dataset${datasetNumber}.json`)).data
  } catch (e) {
    // Fire sentry alarm
    console.log('Something went wrong while fetching the data')
    return []
  }
}
