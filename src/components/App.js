
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home,Navbar,CreatePost,PostDetails} from './'
function App() {
  return (
    <div className="container">
      
     <BrowserRouter>
     <Navbar></Navbar>
       <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/post/:postId"element={<PostDetails/>}/>
       <Route path="/create-post" element={<CreatePost/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
