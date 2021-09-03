const config = {
    MAX_ATTACHMENT_SIZE: 50000000000,
    s3: {
      REGION: "us-west-2",
      //BUCKET: "prod-orion-landing-bucket", // test env
      BUCKET: "prod-artemis-landing-bucket",
      //REGION: "us-west-2",
      //BUCKET: "dev-orion-models",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_PTFV8y24N",
      IDENTITY_POOL_ID: "us-west-2:54ba1cec-eb84-4f1f-9741-2290752de104",
      APP_CLIENT_ID: "44hu61mk3kg565s6gkbt8llgag",
      //USER_POOL_ID: "us-west-2_13Zfxy52S",  //test env
      //USER_POOL_ID: "us-west-2_2ktmxFnCJ",
      //APP_CLIENT_ID: "1h2d5t5seb5fail9k28jpelnhu", //test env 
      //APP_CLIENT_ID: "45lp43bgvolrm177hhnicjhlae",
      //IDENTITY_POOL_ID: "us-west-2:49482d7c-aa5a-4137-b865-f20c648c3732", //test env
    },
  };
  
  export default config;