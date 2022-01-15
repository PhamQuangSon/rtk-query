import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";


export function Header({ spotify }: any) {
    const user: any = useSelector(selectUser);
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //   // spotify.getMe().then((user: any) => {
    //   //   dispatch(setUser(user));
    //   //   console.log("user", user);
    //   // });
    // }, [dispatch]);

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="Mk" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
