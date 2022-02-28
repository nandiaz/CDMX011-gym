function societyName(friends) {
	const sort = friends.sort()
	const result = sort.map(name => name[0])
	return result.join("")
}