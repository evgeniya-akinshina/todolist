export const randomDate = () => {
	const after = new Date()
	after.setDate(after.getDate() + 31)

	const today = new Date()
	const randomDate = new Date(today.getTime() + Math.random() * (after.getTime() - today.getTime()))
	return console.log(randomDate)
}
