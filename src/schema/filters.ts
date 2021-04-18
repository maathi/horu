type filterByType = "ip" | "city" | "name"

type filterType = {
  att: filterByType
  value: string
}

export type { filterByType, filterType }
