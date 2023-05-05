import './Post.css';
import ray from "./images/ray.jpg";
import message from "./images/message.png";
import repost from "./images/repost.png";
import like from "./images/like.png";
import download from "./images/download.png";

export default function Post() {
    return (
        <div className='post_part'>
            <p>WTF? Who is Ray? Why she is Skywalker? Luke...?</p>
            <img id='post_img' src={ray} alt='Ray'></img>
            <div className='actions'>
                <img id='message_ico' src={message} alt='message'></img>
                <p>512</p>
                <img id='repost_ico' src={repost} alt='repost'></img>
                <p>98</p>
                <img id='like_ico' src={like} alt='like'></img>
                <p>1712</p>
                <img id='download_ico' src={download} alt='download'></img>
            </div>
        </div>
    );
};