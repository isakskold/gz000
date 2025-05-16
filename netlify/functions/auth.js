exports.handler = async function (event) {
  const params = new URLSearchParams(event.queryStringParameters);
  const code = params.get("code");

  if (!code) {
    return {
      statusCode: 400,
      body: "Missing code parameter",
    };
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  const response = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const data = await response.json();

  if (data.error) {
    return {
      statusCode: 401,
      body: JSON.stringify(data),
    };
  }

  // Redirect to /admin/#access_token=... for Decap CMS to pick up the token
  return {
    statusCode: 302,
    headers: {
      Location: `/admin/#access_token=${data.access_token}`,
    },
    body: "",
  };
};
