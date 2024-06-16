export const FakeAuthProvider = {
  isAuthenticated: false,
  username: null,
  getAuthority: null,
  signIn: async ({ username, password, role }) => {
    if (username === "admin" && password === "admin") {
      console.log("Sign in successful", username, password);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      FakeAuthProvider.isAuthenticated = true;
      FakeAuthProvider.username = username;
      FakeAuthProvider.getAuthority = role;
    }
  },
  signOut: async () => {
    console.log("Sign out successful");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    FakeAuthProvider.isAuthenticated = false;
    FakeAuthProvider.username = null;
  },
};
