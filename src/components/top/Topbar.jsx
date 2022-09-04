import "./topbar.css";
import { Search } from "@material-ui/icons";

export const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">InstaSocial</span>
      </div>
      <div className="topbarContainer">
        <div className="searchbar">
          <Search />
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight"></div>
    </div>
  )
}

