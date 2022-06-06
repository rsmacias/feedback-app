import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext([]);

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item 1 is from context',
            rating: 10
        },
        {
            id: 2,
            text: 'This item 2 is from context',
            rating: 7
        },
        {
            id: 3,
            text: 'This item 3 is from context',
            rating: 3
        },
        {
            id: 4,
            text: 'This item 4 is from context',
            rating: 9
        }
    ]);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4(); 
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if(window.confirm(`Are your sure you want delete the ${id} comment?`)){
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    return <FeedbackContext.Provider value={
        {
            feedback,
            deleteFeedback,
            addFeedback,
        }
    }>
        {children}
    </FeedbackContext.Provider>
};

export default FeedbackContext;