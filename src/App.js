import {Route, Routes} from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import MovieList from "./Pages/MovieList"
import Footer from "./Components/Footer/Footer"
import VideoPlayer from "./Pages/VideoPlayer"



// Render app
const App = () => {
  return (
    <div>
      
      {/* Navbar section */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/video" element={<VideoPlayer />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}


export default App;
