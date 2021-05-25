require('dotenv-safe').load();
const cool = require('cool-ascii-faces');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/cool', (req, res) => res.send(cool()))
	.listen(port, () => console.log(`Listening on ${port}`));
