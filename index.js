const express = require('express');
const twilio = require('twilio');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Twilio credentials (get these from your Twilio account)
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = twilio(accountSid, authToken);

// Route to handle form submission
app.post('/send-message', (req, res) => {
  const { name, email, number, message } = req.body;

  client.messages
    .create({
      body: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`,
      from: 'whatsapp:+14155238886',  // Twilio sandbox WhatsApp number
      to: 'whatsapp:+your_phone_number'
    })
    .then(message => res.send('Message sent successfully!'))
    .catch(error => res.status(500).send('Error sending message to WhatsApp'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
