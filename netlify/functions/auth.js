exports.handler = async function (event) {
  const { code, state } = event.queryStringParameters || {};

  // 1) Initial request: no `code` → redirect to GitHub authorize
  if (!code) {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      redirect_uri: `${process.env.URL}/.netlify/functions/auth`,
      scope: "repo",
      state: state || "",
    });
    return {
      statusCode: 302,
      headers: {
        Location: `https://github.com/login/oauth/authorize?${params.toString()}`,
      },
    };
  }

  // 2) Callback: exchange code for access token
  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const data = await tokenResponse.json();

  if (data.error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: data.error,
        description: data.error_description,
      }),
    };
  }

  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/admin/#access_token=${data.access_token}`,
    },
    body: "",
  };
};
