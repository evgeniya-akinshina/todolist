export type Props = {
	filter?: DateRangeFilter
	onClick?: () => void
}

export enum DateRangeFilter {
	DAY = 'day',
	MONTH = 'month',
}
