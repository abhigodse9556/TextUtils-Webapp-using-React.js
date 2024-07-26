import './App.css';
import './components/Main.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Main from './components/main';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Main></Main>
      <Navbar title='TextUtils'/>
      <div className="container">
        <TextArea heading="Enter the Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;
