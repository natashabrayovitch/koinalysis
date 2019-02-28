import React from 'react';
import '../App.css';

export default function LiveNews() {
    return (
        <div className="Live-News">
            <div className="Live-News-child">
                <iframe title="Live-News-title" className="Live-News-iframe" src="">
                </iframe>
            </div>
            <div className="Live-News-bottom">
                
            <a href="https://cashessentials.org/?s=bitcoin" target="_blank" rel="noopener noreferrer" className="News-feed-link">
                    
            </a>
            </div>
       
             <div className="Live-News-overlay">
             <div className="Live-News-child">
               <h1>Live News WIP</h1>
               </div>
             <div className="Live-News-bottom">
               
                 <a href="https://cashessentials.org/?s=bitcoin" target="_blank" rel="noopener noreferrer" className="Live-News-link">
                 
                 </a>
             </div>
           </div>
           
         </div>
     
    )
}