
import Left from "../Left/Left";
import MoreInfo from "../MoreInfo/MoreInfo";
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
              <div className="block2 week"><MoreInfo/></div>
              
            </div>
          </div>

        </div>
    )
}

export default Home;