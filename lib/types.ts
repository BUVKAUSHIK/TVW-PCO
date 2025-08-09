export type PCO = {
  name: string
  party?: string | null
  precinct?: string | null
  phone?: string | null
  email?: string | null
  address?: string | null
}

export type CountyPCOMap = Record<string, PCO[]>
