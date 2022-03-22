import {motion , AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackItem from "./FeedbackItem"
import Spinner from './shared/spinner'

import FeedbackContext from "../context/FeedbackContext"
function FeedbackList () {
    const {feedback , isLoading} = useContext(FeedbackContext);
    if(!isLoading && (!feedback || feedback.length === 0))
    return <p>No feedback yet</p>
    else{
        return isLoading ? (<Spinner />) : (
            <div className="feedback-List">
            <AnimatePresence>
            {feedback.map((item)=> (
                <motion.div 
                key={item.id}
                initial = {{opacity: 0}}
                animate= {{opacity: 1}}
                exit= {{opacity: 0}}
                >
                <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
            </div>
        )
    // return(
    //     <div className="feedback-List">
    //     <AnimatePresence>
    //     {feedback.map((item)=> (
    //         <motion.div 
    //         key={item.id}
    //         initial = {{opacity: 0}}
    //         animate= {{opacity: 1}}
    //         exit= {{opacity: 0}}
    //         >
    //         <FeedbackItem key={item.id} item={item} />
    //         </motion.div>
    //     ))}
    //     </AnimatePresence>
    //     </div>
    // )

  /*  return(
        <div className="feedback-List">
        {feedback.map((item)=> (
            <FeedbackItem key={item.id} item={item} handleDelete = {handleDelete} />
        ))}
        </div>
    )*/
    } 
}

export default FeedbackList