module.exports = {
	human_date : function(v){
		const d = new Date(v.toString())
		const dStyle = { month: 'long', year: 'numeric' }
		const lang = this.page.lang ?? 'en'
		return d.toLocaleDateString(lang, dStyle)
	},
	machine_date : function(v) {
		const d = new Date(v.toString())
		const yStr = String(d.getFullYear())
		const mStr = String(d.getMonth()+1).padStart(2,'0')
		return `${yStr}-${mStr}`
	},
};
