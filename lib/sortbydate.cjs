module.exports = {
	sortbydate : (value) => {
		const arr = Object.values(value);
		return arr.sort(_sortfn);

		function _sortfn(
			{period:{from: a}},
			{period:{from: b}}
		){
			return (Date.parse(a) - Date.parse(b)) * -1;
		}
	},
};
