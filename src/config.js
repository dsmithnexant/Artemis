const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "dev-orion-models",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_13Zfxy52S",
      APP_CLIENT_ID: "1h2d5t5seb5fail9k28jpelnhu",
      IDENTITY_POOL_ID: "us-west-2:49482d7c-aa5a-4137-b865-f20c648c3732",
    },
  };
  
  export default config;