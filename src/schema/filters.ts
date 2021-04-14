type filterByType = "ip" | "city"

type filterType = {
  att: filterByType
  value: string
}

export type { filterByType, filterType }
