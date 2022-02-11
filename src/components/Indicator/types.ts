export type Props = {
	filter: DateRangeFilter
	onClick: (value: DateRangeFilter) => void
}

export enum DateRangeFilter {
	DAY = 'day',
	WEEK = 'week',
}
