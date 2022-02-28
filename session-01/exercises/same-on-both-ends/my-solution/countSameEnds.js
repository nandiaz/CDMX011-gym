function countSameEnds(str) {
	return str.toUpperCase().replace(/[.!]/g,'').split(" ").filter(e => e[0] == e[e.length - 1] && e.length > 1).length
	
}