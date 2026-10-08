import { Unit } from "@/types/foods"

export function priceBangla(price: number | string): string {
    function digitChange(d: string): string {
        switch (d) {
            case '.': return "."
            case '0': return "0"
            case '1': return '১'
            case '2': return '২'
            case '3': return '৩'
            case '4': return '৪'
            case '5': return '৫'
            case '6': return '৬'
            case '7': return '৭'
            case '8': return '৮'
            case '9': return '৯'
            default: return ''

        }
    }

    let number = String(price).split("")
    number = number.map(n => digitChange(n))

    return number.join("")
}

export function unitBangla(val: Unit): string {
    if (val == "kg") return "কেজি"
    if (val == "dozen") return "ডজন"
    if (val == "litre") return "লিটার"
    if (val == "piece") return "পিস"
    return ""
}