export enum TExperienceTypeEnum {
    Job = 'job',
    Internship = 'internship'
}


export type TExperienceType = TExperienceTypeEnum.Job | TExperienceTypeEnum.Internship
export enum ExperienceLocationEnum {
    Remote = 'remote',
    Office = 'office',
    Hybrid = 'hybrid'
}
export type TExperienceLocation = ExperienceLocationEnum.Remote | ExperienceLocationEnum.Office | ExperienceLocationEnum.Hybrid

export interface IExperienceItem {
    name: string,
    url: string,
    designation: string,
    type: TExperienceType,
    region: string,
    location: TExperienceLocation,
    duration: { startDate: string, endDate: string },
    remark: { description: string, items: string[] },
    skills: string[],
}

// ==========================================================================

