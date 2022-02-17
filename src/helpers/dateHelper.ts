export const getCurrentWeek = () => {
	const today = new Date()
	const startDate = today.getDate() - today.getDay() + 1
	return { start: new Date(today.setDate(startDate)), end: new Date(today.setDate(startDate + 6)) }
}

export const checkDateInRange = (date: Date, start: Date, end: Date): boolean => {
	return date >= start && date <= end
}
