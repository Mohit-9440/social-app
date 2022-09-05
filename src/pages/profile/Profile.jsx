import './profile.css';
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/top/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div class="profileRight">
            <div class="profileRightTop">
                <div class="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                </div>

                <div class="profileInfo">
                    <h4 className='profileInfoName'>Mohit</h4>
                    <span class="profileInfoDesc">Hello my friends</span>
                </div>  
            </div>

            <div class="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>
        </div>
        
      </div>
    </>
  )
}
