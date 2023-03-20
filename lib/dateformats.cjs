module.exports = {
	human_date : function(v, lang = 'en'){
		const d = new Date(v.toString())
		return d.toLocaleDateString(lang, { month: 'long', year: 'numeric' })
	},
	machine_date : function(v) {
		const d = new Date(v.toString())
		const yStr = String(d.getFullYear())
		const mStr = String(d.getMonth()+1).padStart(2,'0')
		return `${yStr}-${mStr}`
	},
};