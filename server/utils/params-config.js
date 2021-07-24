const { v4: uuidv4 } = require("uuid");

const params = (fileName) => {
  const myFile = fileName.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  const imageParams = {
    Bucket: process.env.BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: fileName.buffer,
    ACL: "public-read", // allow read access to this file
  };

  return imageParams;
};

module.exports = params;
