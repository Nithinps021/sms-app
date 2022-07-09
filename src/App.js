import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './pages/mainPage'
import AppBar from './components/appBar';
import ContactDetails from "./pages/contactDetails";
import SendMessage from "./pages/sendMessagePage";


function App() {
  return (
    <>
    <AppBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/details/:phoneno" element={<ContactDetails />} />
          <Route path="/sendmessage/:phoneno" element={<SendMessage/>}/>
        </Routes>
    </>
  );
}

export default App;
