import { useState } from 'react';
import './cards.css';

export default function cards(){
    const [showCards, setShowCards] = useState(false);

    const handleShowProcess = () => {
        setShowCards(true);
    };

    return(
        <div id='process' style={{margin:'7rem 0 4rem 0'}}>
            
            <div className="button-wrapped">
                <button className="show-button" onClick={handleShowProcess}>
                    Process :
                </button>
            </div>

            {showCards && (
                <div className="cards-container show">
                    <div className="card">
                        <img 
                            className='cardimg'
                            src="/clock.jpg"
                            alt="Clockimg"
                        />
                        <p>Step 1</p>
                        <p className='cardtext'>Complete the above modules within the given time, i.e. till 31st December 2024</p>
                    </div>

                    <div className="card">
                        <img 
                            className='cardimg'
                            src="/calender.jpg"
                            alt="Calenderimg"
                        />
                        <p>Step 2</p>
                        <p className='cardtext'>Submit your details in the given form. The deadline is 31st December 2024.</p>
                    </div>

                    <div className="card">
                        <img 
                            className='cardimg'
                            src="/trophy.jpg"
                            alt="Trophyimg"
                        />
                        <p>Step 3</p>
                        <p className='cardtext'>Win exciting prizes and goodies. Also, you can get a chance to work with MLSA MIET as a team member.</p>
                    </div>
                </div>
            )}
        </div>     
    );
}