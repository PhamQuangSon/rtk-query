import "./Player.scss";
import { Sidebar } from "./Sidebar";

export function Player({ spotify }: any) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        {/* <Body spotify={spotify} /> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}
