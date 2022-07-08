import BoxArt from "./components/BoxArt";

import "./App.css";
import Chevron from "./icons/Chevron";

export default function App() {
  return (
    <div>
      <BoxArt width={100} height={75} bg_color={"#dddddd"} distance={10} />
      <section className="bg">
        <div className="title-header">
          <div className="header">
            <h1>TENCHU</h1>
            <h1>Reconstruction</h1>
            <h1>Project</h1>
          </div>
        </div>
        <div className="icon-container">
          <Chevron className={"see-more"} color={"white"} height={"3vh"} />
        </div>
      </section>
    </div>
  );
}
