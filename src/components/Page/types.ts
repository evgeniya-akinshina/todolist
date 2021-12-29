import { PropsWithChildren } from 'react'
import { Props as HeaderProps } from './../Header/types'

export type Props = PropsWithChildren<HeaderProps & {
   link: string
   showButton: boolean
}>
