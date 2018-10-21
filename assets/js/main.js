
var page = function(){

	function drawFilmsTable(filmsList) {
			
        var table = document.getElementById("filmsTable")

        for (var i = 0; i < filmsList.length; i++) {

			var filmsData = [filmsList[i].title,
							 filmsList[i].director,
							 filmsList[i].episode_id]
			var filmNum = getUrlNumber(filmsList[i].url)

            var row = document.createElement("tr")

            for (var k = 0; k < filmsData.length; k++) {

            	var cell = document.createElement("td")
	            var cellText = document.createElement('span')
	            cellText.setAttribute("class", "span-style")
	            cellText.innerHTML = filmsData[k]
	            cell.appendChild(cellText)
	            row.appendChild(cell)
            }

            var cell = document.createElement("td")
            var cellBtn = document.createElement("a")
            cellBtn.setAttribute("class", "btn starship-btn lightsaber")
            cellBtn.setAttribute("role", "button")
            cellBtn.setAttribute("href", "screen2.html?" + filmNum)
     
            cellBtn.innerHTML = "starships"
            cell.appendChild(cellBtn)
            row.appendChild(cell)
            
    		table.appendChild(row)
        }
	}

	function fillCustomTable(data, filmTitle) {

		var shipNum = getUrlNumber(data.url)

        var table = document.getElementById("customTable")

        var row = document.createElement("tr")
    	var cell = document.createElement("td")
        var cellText = document.createElement('a')
        cellText.setAttribute("role", "button")
        cellText.innerHTML = data.name.toLowerCase()
		cellText.setAttribute("class", "btn row-style")
		cellText.setAttribute("href", "screen3.html?" + filmTitle + "&" + shipNum)

        cell.appendChild(cellText)
        row.appendChild(cell)
		table.appendChild(row)
	}

	function fillDataTable(data){
		
		var keys = Object.keys(data)
		var values = Object.values(data)

		var table = document.getElementById("customTable")			

		for (var i = 0; i < keys.length; i++) {
				
			if(!Array.isArray(values[i])){

				var row = document.createElement("tr")
				var cell = document.createElement("td")
		        var cellText = document.createElement('span')        
		        cellText.innerHTML = keys[i].replace(/_/g, " ") + " : " + values[i].toLowerCase()
		        cellText.setAttribute("class", "span-style")

		        cell.appendChild(cellText)
		        row.appendChild(cell)
				table.appendChild(row)
			}
		}			
	}

	function getUrlNumber(url) {
		
		var result = []
		var k = url.length - 2
		var number = ""

		while(url.charAt(k) != "/"){
			result.unshift(url.charAt(k))
			k--
		}

		for (var i = 0; i < result.length; i++) {
			number += result[i]
		}
		return number
	}

	function setText(type, name, text){

		switch(type){

			case "class":
				var sections = document.getElementsByClassName(name)
				for (var i = 0; i < sections.length; i++) {
					sections[i].innerHTML = text.toLowerCase()
				}
			break

			case "id":
				document.getElementById(name).innerHTML = text.toLowerCase()
			break
		}
	}

	function validateData(){
		
		var isOk = false

		var name = document.getElementById("name")
		
		if(typeof name.value == "string")
			isOk = true
		
		return isOk
	}

	return{
		drawFilmsTable:drawFilmsTable,
		fillCustomTable:fillCustomTable,
		setText:setText,
		fillDataTable:fillDataTable,
		validateData:validateData
	}
}()