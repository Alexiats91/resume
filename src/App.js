import './App.css';
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";

function App() {
    return (
        <div className="App">
            <div  className="leftSide">
                <LeftContent />
            </div>
            <div  className="rightSide">
                <RightContent />
            </div>
        </div>
    );
}

export default App;
