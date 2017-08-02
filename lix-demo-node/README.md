# LixDemoNodeJS
Simple Lix Calculator in Node.js Backend:

This backend application gives you the "LIX readability (difficulty) level" back by putting in example text into the body raw data within the Postman application.

You use the POST functionality with this parameters:
URL: "http://localhost:3000/api/v1/readability"
Body: "raw" & JSON(application/json)

The response will be send back instantly with a translated difficulty level of the calculated score.

UserText example for input of the body raw data within the Postman application:

{"text":"Use your books and newspapers to write an English text."}
