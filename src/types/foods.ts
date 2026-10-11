export interface ICategory {
    id: string
    slug: string
    nameBn: string
    icon: string
}

export interface Change {
    dir: 'up' | 'down' | 'flat'
    pct: number
}

export interface Market {
    market: string
    division: string
    min: number
    max: number
    average?: number
}

export type Unit = "kg" | "litre" | "dozen" | "piece"

export interface IProduct {
    id: number
    slug: string
    nameBn: string
    category: string
    categoryNameBn: string
    categoryIcon: string
    unit: Unit
    image: string
    today: number
    yesterday: number
    lastWeek: number
    lastMonth: number
    change: Change
    markets: Market[]
    error?: string
}

