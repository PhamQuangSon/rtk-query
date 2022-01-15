import "./Body.scss";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Header } from "./Header";
import { SongRow } from "./SongRow";
import { useSelector } from "react-redux";
import { selectDiscoverWeekly } from "../playlists/playListsSlice";
export function Body({ spotify }: any) {
  const discover_weekly: any = useSelector(selectDiscoverWeekly);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item: any, index: number) => (
          <SongRow key={index} track={item.track} />
        ))}
      </div>
    </div>
  );
}
