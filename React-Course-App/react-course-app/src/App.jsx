import { useContext, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from './AuthContext'

function Navbar() {

  const { user, logOut } = useContext(AuthContext);

  return (
    <header style={{
      padding: "1rem 1.5rem",
      marginBottom: "1rem",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
    }}>

      <nav style={{
        display: "flex", gap: "1rem"
      }}>
        <Link to={"/"} className='text-blue-500'>Home</Link>
        <Link to={"/profile"} className='text-blue-500'>Profile</Link>
      </nav>

      <div>
        {!user.isAuth ? <Link to={"/login"} className='ml-[200px] text-blue-500'>Login</Link> : <button
        className='ml-[200px]'
        onClick={logOut}>Logout</button>}
      </div>
    </header>
  )
}

function HomePage() {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1 className='text-5xl font-bold'>Home</h1>

      {user.isAuth ? (
        <p>Welcome back, {user.name}!</p>
      ) :
        (
          <p className='mt-4'>You are not logged in. Go to the login page to sign in</p>
        )}
    </div>
  );
}

function ProfilePage() {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1 className='text-5xl font-bold'>Profile</h1>
      <p className='mt-8'>Name: {user.name}</p>
      <p className='mt-4'>Here you could show more user info from the context.</p>
    </div>
  );
}

function LoginPage() {

  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1 className='text-5xl font-bold'>Login</h1>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name
          <input type="text"
            placeholder='type any name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              marginLeft: "0.5rem", border: "1px solid green", borderRadius: "18px"
              , textAlign: "center"
            }}
          />
        </label>

        <button className='px-8 py-1 rounded-lg font-bold bg-green-500 cursor-pointer' type='submit' style={{ marginLeft: "2rem" }}>
          Log in
        </button>
      </form>
      {user.isAuth && <p className='mt-4'>User Logged</p>}
    </div>
  )
}


function App() {

  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  function logOut() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>

      <AuthContext.Provider value={{ user, login, logOut }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1 style={{ padding: "0 1.5rem" }}>Not Found</h1>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  )
}

export default App
