import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App () {
    return (
        <>
            <Header />
            <div className="container">
                <h1>This is my App</h1>
                <FeedbackList feedback={FeedbackData} />
            </div>
        </>
    );
}

export default App;