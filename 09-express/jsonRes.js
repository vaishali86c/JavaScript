const express = require('express');

const app = express();
const port = 3000;

app.get('/get-json', (req, res) => {
    const responseData = {
        message: 'This is a JSON response',
        data: {
          key1: 'value1',
          key2: 'value2',
        },
      };
    
      // Send the JSON response
      res.json(responseData);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });