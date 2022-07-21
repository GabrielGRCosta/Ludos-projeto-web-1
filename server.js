var express = require("express");
var path = require("path");
const { Script } = require("vm");
var app = express();


app.get("/",function(req,res){
    res.render("login");
});

app.get("/home.html",function(req,res){
  res.render("home");
});

app.get("/catalogo.html",function(req,res){
  res.render("catalogo");
});

app.get("/jogo/:id", function(req,res){ 
	let a = req.params["id"]
	console.log(a)
	const jogos = [ 
	{  
	  "name": "dixit",
	  "price": "90.00",
	  "description": "Um jogo leve e divertido para jogar com os amigos",
	},
  {  
	 	"name": "bang",
	  "price": "180.00",
	  "description": "Jogo de times e sobrevivencia",
	},
	{ 
		"name": "zombcide",
	  "price": "500.00",
	  "description": "Zumbi querem te devorar",
	},
	{ 
		"name": "coup",
	  "price": "400.00",
	  "description": "Jogo de blefe",
	},
	{ 
		"name": "secret hitler",
	  "price": "300.00",
	  "description": "Blefe e apostas",
	},
	{ 
		"name": "pega em 6", 
	  "price": "200.00",
	  "description": "Jogo de cartas",
	}
]
	function filterByID(obj) {
		if (a in obj == 'dixit') {
			return true;
		}
	}

	var arrByID;
	jogos.map((jogo) => a == jogo.name ? arrByID=jogo : console.log("n é"));

	console.log('Filtered Array\n', arrByID);
 })

app.get("/jogo.html",function(req,res){
  res.render("jogo");
});

app.get("/cadastro.html",function(req,res){
  res.render("cadastro");
});


app.engine("html", require("ejs").renderFile);
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use('/static', express.static('images'));

app.listen(app.get("port"),function(){
    console.log("Server Rodando na Porta " + app.get("port"));
});
