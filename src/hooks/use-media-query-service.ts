import { useEffect } from 'react'
import _ from 'lodash'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ViewportEnum } from '../types'
import { useAppDispatch } from '../redux'
import { setUtilViewPort } from '../redux/slices/util.slice'

export function useMediaQueryService() {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(
            setUtilViewPort(
                _.get(ViewportEnum, isDesktop ? 'Desktop' : 'Portrait')
            )
        )
    }, [dispatch, isDesktop])
}
