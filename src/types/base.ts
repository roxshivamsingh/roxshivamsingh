export interface IBase {
    name: { first: string; last: string }
    mobile: string
    links: IBaseLinkItem[]
    email: string
    address: IBaseAddress
}

export interface IBaseLinkItem {
    title: string
    link: string
}

export interface IBaseAddress {
    local: string
    landmark: string
    stateName: string
    countryName: string
    zipCode: string
    countryCode: string
}

// ==========================================================================
