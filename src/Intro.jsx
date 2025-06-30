import useMediaQuery from '@mui/material/useMediaQuery';
import './intro.css';

export default function intro(){
    const isMobile = useMediaQuery('(max-width:768px)');

    return(
        <>
        {!isMobile ?(
            <div className='intro' id='home'>
                <img 
                    className="img"
                    src="/mlsa_logo.png"
                    alt="Logo"
                />
                <p className='activityzone'>
                    <i className='pacifico-regular activityzonetext'>THE&nbsp;ACTIVITY&nbsp;ZONE</i>
                    <br></br>
                    <a href='#modules' className='date'>October 24 - December 24</a>
                </p>
            </div>
        ):(
            <div className='intro' id='home'>
                <p className='activityzone'>
                    <i className='pacifico-regular activityzonetext'>THE&nbsp;&nbsp;ACTIVITY&nbsp;&nbsp;ZONE</i>
                    <br></br>
                    <a href='#modules' className='date'>October 24 - December 24</a>
                </p>
            </div>
        )}
        </>
    );
}