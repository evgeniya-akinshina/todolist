export const randomDate = (): Date => {
	const after = new Date()
	after.setDate(after.getDate() + 7)

	const today = new Date()
	return new Date(today.getTime() + Math.random() * (after.getTime() - today.getTime()))
}
