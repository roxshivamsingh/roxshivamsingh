export interface IBase {
    name: { first: string, last: string },
    mobile: string,
    links: IBaseLinkItem[],
    email: string,
    address: IBaseAddress
}

export interface IBaseLinkItem {
    title: string,
    link: string,
}

export interface IBaseAddress {
    local: string,
    landmark: string,
    stateName: string,
    countryName: string,
    zipCode: string,
    countryCode: string
}


// ==========================================================================

export const _base: IBase = {
    name: { first: 'Shivam', last: 'Singh' },
    mobile: '8218165149',
    links: [
        { title: 'Github', link: 'https://github.com/roxshivamsingh' },
        { title: 'LinkedIn', link: 'https://facebook.com/roxshivamsingh' },
        { title: 'Portfolio', link: 'https://roxshivamsingh.vercel.com' },
        { title: 'Resume', link: 'https://roxshivamsingh.vercel.com' },
    ],
    email: 'roxshivamsingh@gmail.com',
    address: {
        countryCode: '+91',
        local: '11 F-Block Krishna Puram',
        landmark: 'Near Birla Mandir',
        stateName: 'UP',
        countryName: 'India',
        zipCode: '281003'
    }
}