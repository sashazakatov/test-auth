import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

export const App = () => {
  return (
    <GoogleOAuthProvider clientId="728051063645-2lelggnau5h8n6bm9pkfsnfhot5aj8bm.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
);
};
