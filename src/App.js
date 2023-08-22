import './App.css';
import {useAuth} from "@frontegg/react";

function App() {
    const {user, isAuthenticated} = useAuth();

    const logout = () => {
        window.location.href = `${window.location}account/logout`;
    }

    const redirectToLogin = () => {
        window.location.href = `https://auth.correkt.horse?redirectUrl=${window.location}`;
    }

    return (<div className='App'>
            {isAuthenticated ? (<div>
                    <h1>app1.correkt.horse</h1>
                    <div>
                        <img src={user?.profilePictureUrl} alt={user?.name} />
                        <span>{user?.name}</span>
                    </div>
                    <div>
                        <button onClick={() => logout()}>Logout</button>
                    </div>
                </div>

            ) : <div>
                <h1>app1.correkt.horse</h1>
                <button onClick={() => redirectToLogin()}>Login</button>
            </div>}
        </div>);
}

export default App;
