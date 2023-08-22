import './App.css';
import { useAuth } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();

  const redirectToLogin = () => {
      window.location.href = `https://auth.correkt.horse?redirectUrl=${window.location}`;
  }

  return (
      <div className='App'>
        {isAuthenticated ? (
            <div>
              <img src={user.profilePictureUrl} alt={user.name} />
              <span>{user.name}</span>
            </div>

        ) :
            <div>
                <h1>app1.correkt.horse</h1>
                <button onClick={() => redirectToLogin()}>Click to authenticate</button>
            </div>
        }
      </div>
  );
}

export default App;
