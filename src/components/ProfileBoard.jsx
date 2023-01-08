import React from 'react';
import Avatar from '../imgs/avatar.png';
import '../stylesheets/index.css';
import '../stylesheets/ProfileBoard.css';
import { ReactComponent as WorkSVG } from '../imgs/workplace.svg';
import { ReactComponent as LinkSVG } from '../imgs/link.svg';
import { ReactComponent as TwitterSVG } from '../imgs/twitter.svg';
import { ReactComponent as LocationSVG } from '../imgs/location.svg';

export default function ProfileBoard() {
  return (
    <div className='profile-box flex'>
        <div  className='profile-left-container flex flex-column flex-align-center'>
            <img src={Avatar} id='profile-img'/>
        </div>
        <div className='profile-right-container'>
            <div className='profile-box-head flex flex-align-center'>
                <a id='display-name' href='https://google.com'>Blazing</a>
                <h5 id='join-date'>Joined Jan 01 2000</h5>
            </div>
            <div className='profile-box-bio flex flex-column'>
                <a id='username-tag'>@BlazingIsFire</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget luctus justo, non varius nulla. Nam ultrices eget diam quis posuere. Integer pulvinar, risus sed consectetur consectetur, odio massa condimentum metus, vitae semper diam quam ac tellus. Cras efficitur neque et dolor porta hendrerit. Sed at ex a augue molestie venenatis.</p>
            </div>
            <div className='profile-info-box flex flex-center-all'>
                <div className='profile-repos flex flex-column'>
                    <h5>Repos</h5>
                    <p>0</p>
                </div>
                <div className='profile-followers'>
                    <h5>Followers</h5>
                    <p>0</p>
                </div>
                <div className='profile-following'>
                    <h5>Following</h5>
                    <p>0</p>
                </div>
            </div>
            <div className='profile-details-top flex flex-row'>
                <span className='flex flex-align-center'>
                    <LocationSVG id='profile-detail-svg'/>
                    Pasadena, MD
                </span>
                <span className='flex flex-align-center'>
                    <TwitterSVG id='profile-detail-svg'/>
                    @Unavailable
                </span>
            </div>
            <div className='profile-details-bottom flex flex-row'>
                <span className='flex flex-align-center'>
                    <LinkSVG id='profile-detail-svg'/>
                    Website Link
                </span>
                <span className='flex flex-align-center'>
                    <WorkSVG id='profile-detail-svg'/>
                    Unavailable
                </span>
            </div>
        </div>
    </div>
  )
}
