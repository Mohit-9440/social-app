import "./rightbar.css";
import {Users} from '../../dummyData';
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt=""/>
          <h4 class="rightbarTitle">Online Friends</h4>
          <ul class="rightbarFriendList">
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
          </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return(
      <>
        <h4 class="rightbarTitle">User Information</h4>
        <div class="rightbarInfo">
          <div class="rightbarInfoItem">
            <span class="rightbarInfoKey">City:</span>
            <span class="rightbarInfoValue">New Delhi</span>
          </div>
          <div class="rightbarInfoItem">
            <span class="rightbarInfoKey">From:</span>
            <span class="rightbarInfoValue">Pune</span>
          </div>
          <div class="rightbarInfoItem">
            <span class="rightbarInfoKey">Relationship:</span>
            <span class="rightbarInfoValue">Committed</span>
          </div>
        </div>
        <h4 class="rightbarTitle">User Friends</h4>
        <div class="rightbarFollowings">
          <div class="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
          <div class="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
          <div class="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
          <div class="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
          <div class="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
          <div class="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" class="rightbarFollowingImg"/>
            <span class="rightbarFollowingName">Bharat</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <ProfileRightBar/>
        </div>
    </div>
  )
}
