import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import TopicQuiz from './screens/TopicQuiz/TopicQuiz'
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

function App() {
  return (
    <BrowserRouter>

<Header/>
<main>
  <Routes>
  <Route path='/' Component={LandingPage} exact/>

  <Route path='/topicQuiz'  element={<TopicQuiz />} />
  <Route path='/login'  element={<LoginScreen />}  />
  <Route path='/register' element={<RegisterScreen />} />

  </Routes>
</main>
<Footer />
    </BrowserRouter>
  );
}

export default App;
