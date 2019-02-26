import React from 'react';
import '../App.css';

export default function bitcoinGraph() {
    return (
        <div className="News-feed">
            <div className="News-feed-child">
                <iframe title="News-feed-title" className="News-feed-iframe" src="https://abcnews.go.com">
                </iframe>
            </div>
        </div>
    )
}