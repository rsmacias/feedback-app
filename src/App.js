import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App () {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm(`Are your sure you want delete the ${id} comment?`)){
            console.log('App', id);
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    }; 

    return (
        <>
            <Header />
            <div className="container">
                <h1>This is my App</h1>
                <FeedbackList feedback={feedback} 
                              handleDelete={deleteFeedback} />
            </div>
        </>
    );
}

export default App;