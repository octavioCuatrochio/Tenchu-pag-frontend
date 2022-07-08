import BoxArt from "./components/BoxArt";

import "./App.css";

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
        <h2 className="welcome">Welcome!</h2>
      </section>
    </div>
  );
}
