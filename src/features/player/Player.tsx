import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { getTokenFromUrl } from "../../spotify";
import { selectToken, setToken } from "../auth/authSlice";
import "./Player.scss";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { Body } from "./Body";
import { setUser } from "../user/userSlice";
import {
  setDiscoverWeekly,
  setUserPlayLists,
} from "../playlists/playListsSlice";
import { Footer } from "./Footer";

export function Player({ spotify }: any) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("_token", _token);
    if (_token && _token !== "") {
      dispatch(setToken(_token));

      console.log("run get user");
      spotify.setAccessToken(_token);

      spotify.getMe().then((user: any) => {
        dispatch(setUser(user));
        console.log("user", user);
      });

      spotify.getUserPlaylists().then((playlists: any) => {
        dispatch(setUserPlayLists(playlists));
      });

      spotify.getPlaylist("37i9dQZF1DWV7cvDzE3MOI").then((response: any) => {
        dispatch(setDiscoverWeekly(response));
        console.log("response", response);
      });
    }
    if (!_token && _token === undefined) {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}
