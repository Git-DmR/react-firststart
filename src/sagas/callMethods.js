export const loginRequest = (data) => ({
  url: "https://demo-api.it-shatle.by/auth/signIn",
  // url: "https://demo-api.it-shatle.by/auth/signup",
  method: "post",
  data,
});
