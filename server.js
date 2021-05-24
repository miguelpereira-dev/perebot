require('dotenv-safe').load();

const app = require('express')();
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('listening on port' + port);
});
