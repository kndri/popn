const { connect } = require("getstream");
const AWS = require("aws-sdk");
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

const username = event.request.userAttributes.preferred_username;

exports.handler = async (event, context) => {
  // TODO implement

  const userToken = client.createUserToken(username);
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
    userToken: userToken,
  };

  const emailVerified = await cognitoidentityserviceprovider
    .adminUpdateUserAttributes({
      UserAttributes: [
        {
          Name: "custom:stream_token",
          Value: userToken,
        },
      ],
      UserPoolId: event.userPoolId,
      Username: event.email,
    })
    .promise();
  context.done(null, event);
  return response;
};
