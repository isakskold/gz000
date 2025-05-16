exports.handler = async function (event) {
  console.log(
    "Auth function called with query params:",
    event.queryStringParameters
  );
  const { code, state } = event.queryStringParameters || {};

  // 1) Initial request: no `code` → redirect to GitHub authorize
  if (!code) {
    console.log("No code provided, redirecting to GitHub authorize");
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      redirect_uri: `${process.env.URL}/.netlify/functions/auth`,
      scope: "repo",
      state: state || "",
    });
    const redirectUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
    console.log("Redirecting to:", redirectUrl);
    return {
      statusCode: 302,
      headers: {
        Location: redirectUrl,
      },
    };
  }

  // 2) Callback: exchange code for access token
  console.log("Exchanging code for access token");
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
  console.log("Token response:", {
    ...data,
    access_token: data.access_token ? "[REDACTED]" : undefined,
  });

  if (data.error) {
    console.error(
      "Error in token exchange:",
      data.error,
      data.error_description
    );
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: data.error,
        description: data.error_description,
      }),
    };
  }

  // 3) Redirect back to the CMS admin with token in fragment only
  console.log("Preparing final redirect to admin");
  const fragmentParams = new URLSearchParams({
    access_token: data.access_token,
    state: state || "",
    provider: "github",
  });

  return {
    statusCode: 302,
    headers: {
      Location: `${process.env.URL}/admin/#${fragmentParams.toString()}`,
    },
    body: "",
  };
};
