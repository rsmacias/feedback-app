import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';

function App () {
    return (
        <>
            <Header />
            <div className="container">
                <h1>This is my App</h1>
                <FeedbackItem item={{ rating: 5, text: 'This is a sample' }} />
            </div>
        </>
    );
}

export default App;