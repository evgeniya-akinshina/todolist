import * as React from 'react'
import { LinkProps } from 'react-router-dom'

export type Props = LinkProps &
	React.RefAttributes<HTMLAnchorElement> & {
		title: string
		subTitle?: string
		progress?: {
			value: number
			total: number
         today: number
		}
	}
