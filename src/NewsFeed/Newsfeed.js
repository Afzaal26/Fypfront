import React from 'react'
import './Newsfeed.css'
import Stock from './Stock';

function Newsfeed() {
  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
            <div className='newsfeed__chartsection'>
                <div className='newsfeed__portfolio'>
                    {/*<h1>$114,656</h1>
                    <p>+$44.63 (+0.04%) Todayafzaal</p>*/}
                    <Stock></Stock>
                </div>
                <div className='newsfeed__chart'>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsfeed;