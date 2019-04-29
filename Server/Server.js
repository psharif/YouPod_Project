const app = require('./src/app')

//define port
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("express is working on port " + PORT);
});