
import Left from "../Left/Left";
import Weekinfo from "../Weekinfo/WeekInfo";
import ChooseState from "../ChooseState/ChooseState";
import './Home.css'

function Home(){
    return(
        <div className="Main">
          <div className="MainInner">
            <div className="left">
              <Left/>
            </div>
            <div className="Right">
              <div className="block1"><ChooseState/></div>
              <div className="block2 week"><Weekinfo/></div>
              
            </div>
          </div>

        </div>
    )
}

export default Home;