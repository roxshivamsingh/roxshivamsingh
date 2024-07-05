import { Button } from "@mui/material"
import axios from "axios"
// =======================================================================================

import { Iconify } from "../iconify"
import { AXIOS_DOWNLOAD_FILE } from "../../types/axios"
import { useCallback, useState } from "react";

export default function CustomDownloadButton(props: TProps) {
    const { file: { url, name }, label } = props;
    const [toggle, setToggle] = useState({ isLoading: false })
    const onClickButton = useCallback(() => {
        if (url?.length) {
            setToggle((prev) => ({ ...prev, isLoading: true }))
            const timer = setTimeout(() => {
                axios({ url, responseType: 'blob' })?.then((response) => {
                    AXIOS_DOWNLOAD_FILE(response, name)
                })
                setToggle((prev) => ({ ...prev, isLoading: false }))

            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [name, url])
    return <Button
        variant="contained"
        onClick={onClickButton}
        size="large"
        disabled={toggle.isLoading}
        startIcon={<Iconify icon={toggle.isLoading ? 'line-md:downloading-loop' : 'heroicons-outline:document-download'} />}
    >{label?.length ? label : 'Submit'}</Button>
}
type TProps = { file: { url: string, name: string }, label: string }
