import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/pages/Home"
import BoolQuestions from "./components/pages/BoolQuestions"
import DepressionQuestions from "./components/pages/DepressionQuestions"
import TalkToFriends from "./components/pages/TalkToFriends"
import Logo from "./components/styles/logo.png"

function App() {
    return(<>
    <Router>
        <div className="text-center">
            <a href="/">
        <img src={Logo} alt="depression checker" width="50%"  />
        </a>

        </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bool_questions" element={ <BoolQuestions /> } />
        <Route path="/depression_questions" element={<DepressionQuestions />} />
        <Route path="/talk_to_friends" element={<TalkToFriends />} />



        </Routes>


    </Router>


    
    
    </>)
}


export default App