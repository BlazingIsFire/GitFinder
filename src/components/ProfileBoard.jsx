import React, { useEffect, useState } from 'react';
import Person from '../imgs/person.svg';
import '../stylesheets/index.css';
import '../stylesheets/ProfileBoard.css';
import { ReactComponent as LinkSVG } from '../imgs/link.svg';
import { ReactComponent as WorkSVG } from '../imgs/workplace.svg';
import { ReactComponent as TwitterSVG } from '../imgs/twitter.svg';
import { ReactComponent as LocationSVG } from '../imgs/location.svg';

export default function ProfileBoard({ data }) {
    const [userJoined, setUserJoined] = useState();

    useEffect(()=>{
        let joinedFullDate = data.created_at.slice(0, -10);
        let joinedYear = joinedFullDate.substring(4, -6);
        let joinedMonth = joinedFullDate.substring(5, 7);
        let joinedDay = joinedFullDate.substring(10, 8);
        setUserJoined(`${joinedMonth}-${joinedDay}-${joinedYear}`)
    }, [data])
  return (
    <div className='profile-box flex'>
        <div  className='profile-left-container flex flex-column flex-align-center'>
            <img src={data.avatar_url ? data.avatar_url : Person} id='profile-img' alt='User'/>
        </div>
        <div className='profile-right-container'>
            <div className='profile-box-head flex flex-align-center'>
                <h2 id='display-name'>{data.name ? data.name : 'No display name.'}</h2>
                <h5 id='join-date'>Joined: {userJoined}</h5>
            </div>
            <div className='profile-box-bio flex flex-column'>
                <a id='username-tag' href={data.html_url} target='_blank' title='Github' rel='noreferrer'>@{data.login}</a>
                <p>{data.bio ? data.bio : 'This profile has no bio.'}</p>
            </div>
            <div className='profile-info-box flex flex-center-all'>
                <div className='profile-repos flex flex-column'>
                    <h5>Repos</h5>
                    <p>{<a href={`https://github.com/${data.login}?tab=repositories`} target="_blank" rel='noreferrer'>{data.public_repos}</a>}</p>
                </div>
                <div className='profile-followers'>
                    <h5>Followers</h5>
                    <p>{data.followers}</p>
                </div>
                <div className='profile-following'>
                    <h5>Following</h5>
                    <p>{data.following}</p>
                </div>
            </div>
            <div className='profile-details-top flex flex-row'>
                <span className='flex flex-align-center'>
                    <LocationSVG id='profile-detail-svg'/>
                    {data.location ? data.location : 'No location displayed.'}
                </span>
                <span className='flex flex-align-center'>
                    <TwitterSVG id='profile-detail-svg'/>
                    {data.twitter_username ? `@${data.twitter_username}` : '@Unavailable'}
                </span>
            </div>
            <div className='profile-details-bottom flex flex-row'>
                <span className='flex flex-align-center'>
                    <LinkSVG id='profile-detail-svg'/>
                    {data.blog ? <a href={data.blog} target='_blank' rel='noreferrer' title={data.blog}>User's Website</a> : 'No website linked.'}
                </span>
                <span className='flex flex-align-center' id='company-span'>
                    <WorkSVG id='profile-detail-svg'/>
                    {data.company ? data.company : 'Unavailable'}
                </span>
            </div>
        </div>
    </div>
  )
}
