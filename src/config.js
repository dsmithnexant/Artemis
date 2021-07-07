const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "Yhttps://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_13Zfxy52S",
      APP_CLIENT_ID: "1h2d5t5seb5fail9k28jpelnhu",
    },
  };
  
  export default config;