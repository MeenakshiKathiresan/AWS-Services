require('dotenv').config();

const AWS = require('aws-sdk')

AWS.config.update({
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key,
    region: 'us-east-1'
})

const iam = new AWS.IAM();

// Call the listUsers method
iam.listUsers({}, (err, data) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('IAM Users:', data.Users);
  }
});