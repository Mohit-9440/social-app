import './sidebar.css';
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Help, Work, Event, School } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon' />
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon' />
                    <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilled className='sidebarIcon' />
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className='sidebarIcon' />
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className='sidebarIcon' />
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Help className='sidebarIcon' />
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <Work className='sidebarIcon' />
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon' />
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon' />
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className='sidebarButton'>Show More</button>
            <hr className='sidebarHr'></hr>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
                    <span className="sidebarFriendName">Bharat</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/3.jpeg" alt="" />
                    <span className="sidebarFriendName">Mohit</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/4.jpeg" alt="" />
                    <span className="sidebarFriendName">Kanishka</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/5.jpeg" alt="" />
                    <span className="sidebarFriendName">Rupal</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/6.jpeg" alt="" />
                    <span className="sidebarFriendName">Lavish </span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/7.jpeg" alt="" />
                    <span className="sidebarFriendName">Jassi</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/8.jpeg" alt="" />
                    <span className="sidebarFriendName">Deeya</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/9.jpeg" alt="" />
                    <span className="sidebarFriendName">Aman</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImg' src="/assets/person/10.jpeg" alt="" />
                    <span className="sidebarFriendName">Himanshu</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
