import './online.css';

export default function Online({user}) {
    return (
        <li class="rightbarFriend">
            <div class="rightbarProfileImgContainer">
                <img
                 className="rightbarProfileImg" 
                 src={user.profilePicture}
                 alt=""
                />
                <span class="rightbarOnline"></span>
            </div>
            <span class="rightbarUsername">{user.username}</span>
        </li>
    )
}
