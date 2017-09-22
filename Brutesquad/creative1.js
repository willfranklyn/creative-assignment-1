class Player{
	constructor(first, last, position, goals, games, shots, assists, penaltyMin, picURL){
		this.name = {
			first: first,
			last: last
		};
		this.position = position;
		this.goals = goals;
		this.games = games;
		this.shots = shots;
		this.assists = assists;
		this.penaltyMin = penaltyMin;
		this.picURL = picURL;
	}

	getName(){
		return this.name.last + ", " + this.name.first;
	}

	getDisplay(){
		var li = "<li class='player'>";
		li += "<h3>" + this.getName() + "</h3>";
		li += "<div class='stats'>";
		li += "<h4>" + this.position + "</h4>";
		li += "<p>Goals: " + this.goals + "</p>";
		li += "<p>Games: " + this.games + "</p>";
		li += "<p>Shots on goal: " + this.shots + "</p>";
		li += "<p>Assists: " + this.assists + "</p>";
		li += "<p>Penalty minutes: " + this.penaltyMin + "</p>";
		li += "</div>";
		li += "<img src='" + this.picURL + "'>";
		li += "</li>";
		return li;
	}
}

class Goalie{
	constructor(first, last, saves, games, goalsAllowed, picURL){
		this.name = {
			first: first,
			last: last
		};
		this.position = "Goalie";
		this.saves = saves;
		this.games = games;
		this.goalsAllowed = goalsAllowed;
		this.picURL = picURL;
	}

	getName(){
		return this.name.last + ", " + this.name.first;
	}

	getDisplay(){
		var li = "<li class='player'>";
		li += "<h3>" + this.getName() + "</h3>";
		li += "<div class='stats'>";
		li += "<h4>Goalie</h4>";
		li += "<p>Saves: " + this.saves + "</p>";
		li += "<p>Games: " + this.games + "</p>";
		li += "<p>Goals Allowed: " + this.goalsAllowed + "</p>";
		li += "</div>";
		li += "<img src='" + this.picURL + "'>";
		li += "</li>";
		return li;
	}
}

/*Initialize the team roster*/
var TEAM = [new Player("Will", "Franklyn", "Wing", 12, 18, 20, 8, 6, "will.jpg"),
			new Player("Jacob", "Mayans", "Wing", 14, 18, 24, 10, 2, "jacob.jpg"), 
			new Player("Ryan", "Grochmal", "Center", 8, 18, 18, 16, 4, "Ryan.jpg"),	
			new Player("Jonica", "Rich", "Defenseman", 2, 18, 8, 6, 0, "jonica.jpg"),
			new Player("Jamie", "Homewood", "Center", 14, 16, 26, 8, 2, "jamie.jpg"),
			new Player("Jess", "Bradford", "Wing", 4, 17, 10, 6, 0, "Jess.jpg"),
			new Player("Daniel", "Ormond", "Wing", 8, 15, 14, 5, 10, "Dan.jpg"),
			new Player("Nick", "Pacaro", "Wing", 7, 17, 15, 6, 4, "Nick.jpg"),
			new Player("Kelsie", "Radke", "Wing", 5, 18, 10, 6, 0, "Kelsie.jpg"), 
			new Player("Tele", "Wightman", "Wing", 6, 15, 13, 5, 2, "Tele.jpg"),
			new Goalie("Carrie", "Despain", 26, 15, 2, "Carrie.jpg"), 
			new Player("Emily", "Merrill", "Defenseman", 1, 17, 4, 8, 0, "Emily.jpg"),
			new Player("Kami", "Anderson", "Wing", 6, 16, 9, 3, 2, "Kami.jpg"), 
			new Player("Jodi", "Weiss", "Wing", 11, 17, 21, 4, 0, "Jodi.jpg"),
			new Player("Katie", "Stewart", "Defenseman", 2, 18, 5, 7, 0, "katie.jpg"), 
			new Player("Bree", "Cote", "Defenseman", 1, 18, 4, 6, 0, "Bree.jpg"),
			new Player("Dayna", "Koch", "Wing", 4, 14, 10, 5, 0, "Dayna.jpg"), 
			new Player("Tim", "Rich", "Defenseman", 5, 17, 15, 3, 4, "Tim.jpg"),
			new Player("Jana", "Jensen", "Wing", 7, 14, 12, 8, 0, "Jana.jpg"), 
			new Player("LeighAnn", "Johnson", "Center", 7, 17, 14, 5, 2, "LeighAnn.jpg"),
			new Player("Jessica", "Draper", "Wing", 4, 14, 9, 5, 0, "Jessica.jpg"), 
			new Player("Kellie", "Louie", "Defenseman", 1, 13, 5, 5, 0, "Kelli.jpg"),
			new Player("Addison", "Johnson", "Wing", 15, 17, 26, 6, 6, "Addison.jpg")];
	
/*Initializes the page to display the full roster on load*/
function onLoad(){
	displayList(TEAM);
}

/*Determines whether to search by names, or by numbers.*/
/*Returns list of valid entries from search.*/
function search(input){
	var letters = /^[a-zA-Z]+$/;
	var numbers = /^[0-9]+$/;
	var result = [];
	if(input != "" && input.match(letters))  
	{
		result = searchName(input);
	}else if(input != "" && input.match(numbers)){
		result = searchNumber(parseInt(input, 10));
	}
	return result;
}

/*Sets innerHTML of the unordered list element with id 'search-results'*/
function displayList(result){
	sortList(result);
	var inner = "";
	for(var i = 0; i < result.length; i++){
		inner += result[i].getDisplay();
	}
	var list = document.getElementById("search-results");
	list.innerHTML = inner;
}

/*Sorts array of Players in order by last name, first name, goals, games,
  shots on goal, assists, and finally penalty minutes*/
function sortList(arr){
	arr.sort(function(a,b){
		if(a.name.last > b.name.last){
			return 1;
		}else if(a.name.last < b.name.last){
			return -1;
		}else if(a.name.first > b.name.first){
			return 1;
		}else if(a.name.first < b.name.first){
			return -1;
		}else if(a.goals < b.goals){
			return 1;
		}else if(a.goals > b.goals){
			return -1;
		}else if(a.games < b.games){
			return 1;
		}else if(a.games > b.games){
			return -1;
		}else if(a.shots < b.shots){
			return 1;
		}else if(a.shots > b.shots){
			return -1;
		}else if(a.assists < b.assists){
			return 1;
		}else if(a.assists > b.assists){
			return -1;
		}else if(a.penaltyMin < b.penaltyMin){
			return 1;
		}else if(a.penaltyMin > b.penaltyMin){
			return -1;
		}
	});
}

/*Displays list of players filtered by what was entered into search bar.*/
function updateList(){
	var input = document.getElementById("search-field").value;
	var result = search(input);
	if(input == ""){
		result = TEAM;
	}
	displayList(result);
}

/*Searches roster by input string that match first/last name or position.*/
function searchName(input){
	input = input.toLowerCase();
	result = [];
	for(var i = 0; i < TEAM.length; i++){
		var first = TEAM[i].name.first.toLowerCase();
		var last = TEAM[i].name.last.toLowerCase();
		var position = TEAM[i].position.toLowerCase();
		if(first.startsWith(input) || last.startsWith(input) || position.startsWith(input)){
			result.push(TEAM[i])
		}
	}
	return result;
}

/*Searches roster by numbers that match any stats.*/
function searchNumber(input){
	result = [];

	for(var i = 0; i < TEAM.length; i++){
		var p = TEAM[i];
		if(p.goals == input || p.games == input || p.shots == input || p.assists == input || p.penaltyMin == input || p.saves == input || p.goalsAllowed == input){
			result.push(p);
		}
	}
	return result;
}