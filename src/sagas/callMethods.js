export const loginRequest = () => ({
  url: "https://demo-api.it-shatle.by/auth/signIn",
  method: "POST",
  data: {
    email: "",
    password: "",
  },
});
