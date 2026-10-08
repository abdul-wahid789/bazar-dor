import { priceBangla } from "./englishBangla"

export function priceDiff(today: number, yesterday: number): string {
    if (today > yesterday) {
        return `বেড়েছে - ${priceBangla(today - yesterday)} টাকা`
    }
    else if (yesterday > today) {
        return `কমেছে - ${priceBangla(yesterday - today)} টাকা`
    }
    return `অপরিবর্তিত`
}

export function halfNumberDisplay(val: number): string {
    let formatted = val.toFixed(2)

    if (formatted.endsWith(".00")) {
        formatted = formatted.replace(".00", "")
    }

    return priceBangla(formatted)
}