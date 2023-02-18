import { useState } from "react";

export function TwfollowCard ({username, name}){

    const [isFollowing, setIsFollowing] = useState(false);

    const addAt = ({username}) => `@${username}`;
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button isFollowing'
    : 'tw-followCard-button';

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }


    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw_followCard-avatar" 
                    src={`https://unavatar.io/${username}`}
                    alt="Logo de usuario" 
                />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName"> {addAt({username})} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    <span className="tw-followCard-follow">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}