export interface IAcadmicItem {
    id: number
    name: string
    course: TAcadmicItemName
    branch: TAcadmicItemName
    score: number // type percentage default
    url: string
    city: string
    region: string
    duration: { startDate: string; endDate: string }
}

export type TAcadmicItemName = { abbrivation: string; value: string }

// ==========================================================================
