const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

//Redirect to eightball
app.get('/', (req, res) => {
   return res.redirect('/eightball');
});

//Get answer
app.post('/eightball', (req, res) => {
	var question = { question: req.body.question }
	var possibleAnswers = ["it is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no", "Outlook not so good.", "Very doubtful."];
	var answer;
	var randomNummer;
	
	randomNummer = Math.floor(Math.random()*21);
	/*getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}*/
	
	function getAnswer(question) {
		if (localStorage.getItem(question) === null){
			randomNummer = getRandomInt(20);
			answer = possibleAnswers[randomNummer];
			localStorage.setItem(question, answer);
			return answer;
		}
		else{
			answer = localStorage.getItem(question);
			return answer;
		}
	}
});