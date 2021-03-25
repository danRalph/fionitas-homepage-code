import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";


const url = "https://fiXXXXXXXXXsproject.us7.list-manage.com/subscribe/post?u=5ee02c1ada7b2a3477d623dd8&amp;id=845b627171";

function Subscribe() {
    return (
        <div className="homepage-subscription">
            <h1 data-aos="fade-in" data-aos-delay="300">Recieve updates from us</h1>
            <div className="mailChimp">               
                    <MailchimpSubscribe url={url} />
            </div>
        </div>
    )
}

export default Subscribe;

