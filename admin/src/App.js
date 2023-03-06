import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import UsersList from "./components/UsersList/UsersList";



function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/Posts" element={<Post/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
 
}
