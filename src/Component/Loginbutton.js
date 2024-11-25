import { useState } from "react";

export default function Loginbutton() {
const [loggin, setloggin] = useState(false);
const login = () => {
    setloggin(true);
  };
const logout = () => {
    setloggin(false);
  };
  return (
    <div>
        {loggin ? (
        <>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>) : (
        <>
          <p>You are logged out.</p>
          <button onClick={login}>Login</button>
        </>
      )}
      </div>
  )
}
