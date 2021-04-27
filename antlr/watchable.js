module.exports = function (s) {
	switch(s){
		case "Ano.g4":
		case "index.ts": 
		case "package.json":
			return true
		default: return false

	}
  }