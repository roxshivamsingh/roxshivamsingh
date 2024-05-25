export interface IAcadmicItem {
    id: number,
    name: string,
    course: TAcadmicItemName,
    branch: TAcadmicItemName,
    score: number, // type percentage default
    url: string,
    city: string,
    region: string,
    duration: { startDate: string, endDate: string }
}

export type TAcadmicItemName = { abbrivation: string, value: string }

// ==========================================================================

export const _acadmics: IAcadmicItem[] = [
    {
        id: 1,
        name: 'G.L.A. University',
        city: 'Mathura',
        branch: { abbrivation: 'Diploma', value: 'Diploma' },
        course: { abbrivation: 'C.S.E.', value: 'Computer Science' },
        score: 83,
        url: 'https://www.gla.ac.in',
        region: 'UP, India',
        duration: { startDate: '2016-08-01', endDate: '2019-05-01' }

    },
    {
        id: 1,
        name: 'B. S. A. College of Engineering and Technology',
        city: 'Mathura',
        branch: { abbrivation: 'B. Tech.', value: 'Bachelor of Technology' },
        course: { abbrivation: 'C.S.E.', value: 'Computer Science' },
        score: 78,
        url: 'https://www.bsacet.org',
        region: 'UP, India',
        duration: { startDate: '2019-08-01', endDate: '2022-11-01' }

    }
]