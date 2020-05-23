import React from 'react';
import '../styles/Ticker.scss';
import quotes from '../quotes.json';

function Ticker() {
    return(
		<div className="tcontainer">
		<div className="ticker-wrap">
			<div className="ticker-move">
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				{/* <div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div>
				<div className="ticker-item">{quotes[Math.floor(Math.random() * 1643)].text}</div> */}
			</div>
		</div>
		</div>
    )
}
export default Ticker;