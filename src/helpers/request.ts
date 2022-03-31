export const requestsWithDelay = async <T = any>(
	requests: Promise<T> | Promise<T>[],
	delay: number = 1000,
): Promise<Awaited<T>[]> => {
	if (!Array.isArray(requests)) requests = [requests]
	const [, ...rest] = await Promise.all([new Promise(res => setTimeout(res, delay)), ...requests])
	return rest
}
