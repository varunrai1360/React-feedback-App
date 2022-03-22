//import {v4 as uuidv4} from 'uuid'
//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
//import FeedbackData from "./Data/FeedbackData";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from './component/pages/AboutPage';
import AboutIconLink from './component/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';



function App() {
   // const [feedback , setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4();
    //   //  console.log("ghsvhxg")
    //     setFeedback([newFeedback,...feedback])
    //     //console.log(newFeedback);
    // }
    //const deleteFeedback = (id) => {
      //  if(window.confirm('Are you sure you want to delete it ?')){
        //    setFeedback(feedback.filter((item) => item.id !== id))
        //}
    //}
    return (
        <FeedbackProvider>
    <Router>
        <Header text='feedback UI'/>
        <div className="container">
        <Routes>
        <Route exact path='/' element={
            <>
        <FeedbackForm />
        <FeedbackStats  />
        <FeedbackList />
            </>
        }>
        
        </Route>
        <Route path='/about' element = {<AboutPage />} />
        </Routes>
        <AboutIconLink />
        </div>
        
    </Router>
    </FeedbackProvider>
    )
    
}


export default App;