import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img className="birthdayImg" src="assets/gift.png" alt="" />
                <span className="birthdayText">
                  <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday today
                </span>
            </div>
            <img className="rightbarAd" src="/assets/ad.png" alt=""/>
            <h4 class="rightbarTitle">Online Friends</h4>
            <ul class="rightbarFriendList">
              <li class="rightbarFriend">
                <div class="rightbarProfileImgContainer">
                  <img
                   className="rightbarProfileImg" 
                   src="assets/person/3.jpeg" 
                   alt=""
                  />
                  <span class="rightbarOnline"></span>
                </div>
                <span class="rightbarUsername">Hardik</span>
              </li>
            </ul>
        </div>
    </div>
  )
}
