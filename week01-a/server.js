var express = require('express');
var app = express();
const port = process.env.PORT || 3000

app.use('/', require("../week01-a/routes"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});