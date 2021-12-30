import { PropsWithChildren } from 'react'
import { Props as HeaderProps } from './../Header/types'
import { Props as ButtonProps } from './../Button/types'

export type Props = PropsWithChildren<
	HeaderProps & {
		showButton: boolean
	}
> &
	PropsWithChildren<ButtonProps>
