import { useState , createContext , useEffect } from "react";



const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const[feedback , setFeedback] = useState([])
    const[isLoading , setIsLoading] = useState(true)

    const [feedbackEdit , setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )

    useEffect(() => {
        fetchFeedback()
    }, [])

    //fetch from db.json

    const fetchFeedback = async() => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()
       // console.log(data);
      setFeedback(data)
      setIsLoading(false)
    }

    
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4();
    //   //  console.log("ghsvhxg")
    //     setFeedback([newFeedback, ...feedback])
    //     //console.log(newFeedback);
    // }

    const addFeedback = async(newFeedback) => {
        const response = await fetch('/feedback',{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()
        setFeedback(data, ...feedback)
      //  console.log("ghsvhxg")
       // setFeedback([newFeedback, ...feedback])
        //console.log(newFeedback);
    }
    const deleteFeedback = async(id) => {
        if(window.confirm('Are you sure you want to delete it ?')){
            await fetch(`/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const updateFeedback = async(id , updItem) => {

        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();
        setFeedback(feedback.map((item) => item.id === id ? {...item , ...data} : item))

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
            isLoading,
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
