import { AxiosResponse } from 'axios'

export function AXIOS_DOWNLOAD_FILE(
    response: AxiosResponse,
    nameWithExtension: string
) {
    const href = URL.createObjectURL(response.data)
    const link = document.createElement('a')
    link.href = href
    link.setAttribute('download', nameWithExtension)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
}
