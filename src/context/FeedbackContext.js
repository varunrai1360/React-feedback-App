import { useState , createContext } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const[feedback , setFeedback] = useState([
        {
            id: 1,
            text: "this is from para 1",
            rating: 10
        },
        {
            id: 2,
            text: "this is from para 2",
            rating: 9
        },
        {
            id: 3,
            text: "this is from para 3",
            rating: 8
        },
    ])

    const [feedbackEdit , setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
      //  console.log("ghsvhxg")
        setFeedback([newFeedback, ...feedback])
        //console.log(newFeedback);
    }
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete it ?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = (id , updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item , ...updItem} : item))

    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
   
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}
        >
        {children}
        </FeedbackContext.Provider>
    )
} 

export default FeedbackContext
