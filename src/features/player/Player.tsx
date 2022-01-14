import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { getTokenFromUrl } from "../../spotify";
import { selectToken, setToken } from "../auth/authSlice";
import "./Player.scss";
import { Sidebar } from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { Body } from "./Body";

export function Player({ spotify }: any) {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("_token", _token);
    if (_token && _token !== "") {
      dispatch(setToken(_token));
    }
    if (_token && _token === undefined) {
      navigate("/login");
    }
  }, [dispatch]);

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      {/* <Footer /> */}
    </div>
  );
}
