var express = require("express");
var path = require("path");
const { Script } = require("vm");
var app = express();


app.get("/", function(req, res) {
	res.render("login");
});

app.get("/home.html", function(req, res) {
	res.render("home");
});

app.get("/bang.html", function(req, res) {
	res.render("bang");
});

app.get("/coup.html", function(req, res) {
	res.render("coup");
});

app.get("/secret_hitler.html", function(req, res) {
	res.render("secret_hitler");
});

app.get("/zombicide.html", function(req, res) {
	res.render("zombicide");
});

app.get("/dixit.html", function(req, res) {
	res.render("dixit");
});

app.get("/pega_em_6.html", function(req, res) {
	res.render("pega_em_6");
});

app.get("/catalogo.html", function(req, res) {
	res.render("catalogo");
});

app.get("/api/jogo/:name", function(req, res) {
	let a = req.params["name"]
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

	const filterjogo = jogos.filter(function(jogo) {
		return jogo.name == a;
	})
  console.log(filterjogo);
  res.json(filterjogo[0]);
})

app.get("/jogo/:name", function(req, res) {
	res.render("jogo");
});

app.get("/cadastro.html", function(req, res) {
	res.render("cadastro");
});


app.engine("html", require("ejs").renderFile);
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use('/static', express.static('images'));

app.listen(app.get("port"), function() {
	console.log("Server Rodando na Porta " + app.get("port"));
});
