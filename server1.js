const http = require('http');
const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('./types.json'); // Replace with your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Serve your HTML file when requested
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('File not found.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

// Set the port for your server
const port = process.env.PORT || 3000; // You can change the port number as needed

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Handle storing wrong words in Firestore
function storeWrongWord(wrongWord) {
  // Define a Firestore collection reference for storing wrong words
  const wrongWordsCollection = db.collection('wrong_words');

  // Create a new document with a unique ID and store the wrong word
  wrongWordsCollection
    .add({
      word: wrongWord,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then((docRef) => {
      console.log('Wrong word stored with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error storing wrong word: ', error);
    });
}

// Example: Call storeWrongWord whenever a wrong word is detected
// You can integrate this into your existing code that detects wrong words
// For example, in your checkInput function:
function checkInput() {
  const typedInput = inputElement.value.trim();
  const currentWord = wordList[currentIndex].trim();

  if (!gameOver && typedInput === currentWord) {
    // ... (your existing correct word handling code)
  } else if (!gameOver && currentWord.startsWith(typedInput)) {
    // Partial match, do nothing for now
  } else if (!gameOver) {
    // Wrong word, store it in Firestore
    storeWrongWord(typedInput);
    gameOver = true;
    endGame();
  }
}
