import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../../../services/twitterServiceA9";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            topic: "Web Development",
            userName: "Elon Musk",
            posted: Date.now(),
            verified: false,
            handle: "elonmusk",
            liked: false,
            time: "2h",
            "avatar-image": "https://github.com/jannunzi/web-dev/blob/master/public/images/elon.jpg?raw=true",
            "logo-image": "https://github.com/jannunzi/web-dev/blob/master/public/images/elon.jpg?raw=true",
            stats: {
                comments: 123,
                retweets: 234,
                likes: 345
            },
            tweet: whatsHappening
        });

    }
    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'../../../images/profile.jpeg'}
                             style={{"border-radius":"50%"}}
                             style={{width: '48px', margin: '16px', "border-radius":"50%"}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="fas fa-chart-line me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default WhatsHappening;