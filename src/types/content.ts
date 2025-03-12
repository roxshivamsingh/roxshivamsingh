export interface IContentItem {
    name: string

    at: { created: Date; updated: Date }
}

export enum ContentEnum {
    Resume = 'resume',
    AboutUs = 'about-us',
}
