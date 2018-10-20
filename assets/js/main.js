
var SWAPI = function(){

	function drawFilmsTable(filmsList) {
			
        var table = document.getElementById("filmsTable");

        for (var i = 0; i < filmsList.length; i++) {

			var filmsData = [filmsList[i].title,
							 filmsList[i].director,
							 filmsList[i].episode_id]
			var filmNum = filmsList[i].url.charAt(filmsList[i].url.length - 2)

            var row = document.createElement("tr")
            
            for (var k = 0; k < filmsData.length; k++) {

            	var cell = document.createElement("td")
	            var cellText = document.createElement('span')
	            cellText.innerHTML = filmsData[k]
	            cell.appendChild(cellText)
	            row.appendChild(cell)
            }

            var cell = document.createElement("td");
            var cellBtn = document.createElement("a")
            cellBtn.setAttribute("class", "btn starship-btn lightsaber")
            cellBtn.setAttribute("role", "button")
            cellBtn.setAttribute("href", "screen2.html?" + filmNum)
     
            cellBtn.innerHTML = "Starships"
            cell.appendChild(cellBtn)
            row.appendChild(cell)
            
    		table.appendChild(row)
        }
	}

	function fillCustomTable(data) {

        var table = document.getElementById("customTable")

        var row = document.createElement("tr")
    	var cell = document.createElement("td");
        var cellText = document.createElement('span')
        cellText.innerHTML = data.name

        cell.appendChild(cellText)
        row.appendChild(cell)
		table.appendChild(row)
	}

	return{
		drawFilmsTable:drawFilmsTable,
		fillCustomTable:fillCustomTable
	}
}()