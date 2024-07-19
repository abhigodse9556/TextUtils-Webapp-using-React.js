import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

function App() {
  return (
    <>
      <Navbar title='TextUtils'/>
      <div className="container">
        <TextArea heading="Enter the Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;
