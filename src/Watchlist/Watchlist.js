import React from 'react'
import "./Watchlist.css"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import img1 from '../Img/assets/icon-sun.svg'
import img2 from '../Img/assets/icon-check.svg'
import img0 from '../Img/assets/bg-desktop-dark.jpg'
import firebase from 'firebase'


function addItem(event){
    event.preventDefault();
    let text = document.getElementById("Watchlist-input");
    firebase.firestore()
    .collection("Watchlist-items").add({
        status: "active",
        text: text.Value 
    })
}

function Watchlist() {
  return (


    <div>
        <div>
            <Header></Header>
        </div>
        <div>

        <div className="watchlistbackground-image">
        <img src={img0} />
    </div>
    <div className="wlistcontainer">
        <div className="wlistheader">
            <div className="wlisttitle">
                WATCH LIST
            </div>
            <div className="wlisttheme">
                <img src={img1}/>
            </div>
        </div>
        <div className="new-watchlist">
            <div className="check">
                <div className="check-mark">
                </div>
            </div>
            <div className="new-watchlist-input">
                <form onsubmit="addItem(event)">
                    <input id="watchlist-input" type="text" placeholder="Create a new watchlist..." />
                </form>
            </div>
        </div>
        <div className="watchlist-items-wrapper">
            <div className="watchlist-items">
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark checked">
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className="watchlist-text checked">
                        Cut the lawn
                    </div>
                </div>
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark">
                            
                        </div>
                    </div>
                    <div className="watchlist-text">
                        Cut the lawn
                    </div>
                </div>
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark">
                        </div>
                    </div>
                    <div className="watchlist-text">
                        Cut the lawn
                    </div>
                </div>
            </div>
            <div className="watchlist-items-info">
                <div className="items-left">
                    5 items left
                </div>
                <div className="items-statuses">
                    <span className="active">All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    </div>


        </div>
        <div>
            <Footer></Footer>
        </div>

    </div>

/*<div>

<div>
<Header></Header>

</div>

<div>
<div className="background-image">
        <img src="./Img/assets/bg-desktop-dark.jpg"/>
    </div>
    <div className="container">
        <div className="header">
            <div className="title">
                watchlist
            </div>
            <div className="theme">
                <img src="assets/icon-sun.svg"/>
            </div>
        </div>
        <div className="new-watchlist">
            <div className="check">
                <div className="check-mark">
                </div>
            </div>
            <div className="new-watchlist-input">
                <form onsubmit="addItem(event)">
                    <input id="watchlist-input" type="text" placeholder="Create a new watchlist..." />
                </form>
            </div>
        </div>
        <div className="watchlist-items-wrapper">
            <div className="watchlist-items">
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark checked">
                            <img src="assets/icon-check.svg"/>
                        </div>
                    </div>
                    <div className="watchlist-text checked">
                        Cut the lawn
                    </div>
                </div>
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark">
                            
                        </div>
                    </div>
                    <div className="watchlist-text">
                        Cut the lawn
                    </div>
                </div>
                <div className="watchlist-item">
                    <div className="check">
                        <div className="check-mark">
                        </div>
                    </div>
                    <div className="watchlist-text">
                        Cut the lawn
                    </div>
                </div>
            </div>
            <div className="watchlist-items-info">
                <div className="items-left">
                    5 items left
                </div>
                <div className="items-statuses">
                    <span className="active">All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
                <div className="items-clear">
                    <span>Clear Completed</span>
                </div>
            </div>
        </div>
    </div>
    </div>

<div>
<div>

<Footer></Footer>
</div>

</div>







</div>*/

    )
}

export default Watchlist