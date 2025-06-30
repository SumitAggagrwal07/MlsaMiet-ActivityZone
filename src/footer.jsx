import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyrightIcon from '@mui/icons-material/Copyright';
import useMediaQuery from '@mui/material/useMediaQuery';
import './footer.css';

export default function footer(){
    const isMobile = useMediaQuery('(max-width:1245px)');

    return (
        <div className='footer' id='connect'>
            <p className='followus'>follow us Online:</p>
            <div className='icons'>
                <a href='https://www.linkedin.com/company/mlsa-miet/'>
                    <LinkedInIcon className='icon'/>
                </a>
                <a href='https://www.instagram.com/mlsamiet?igsh=YjJid2s3azRteXZr'>
                    <InstagramIcon className='icon iconmargin'/>
                </a>
                <a href='https://x.com/MlsaMiet?t=qbkMsAN2ljK8zWlJa03weg&s=09'>
                    <XIcon className='icon iconmargin'/>
                </a>
                <a href='https://chat.whatsapp.com/DXjoWMoEPsfBeCrVtBJNqc'>
                    <WhatsAppIcon className='icon iconmargin'/>
                </a>
            </div>
            {!isMobile ? (
                <div className='rights desktop'>
                    <p className='rightcolor'>Rights Reserved: MLSA MIET</p>
                    <p style={{marginRight:'10rem'}}>Contact: mlsa.community@miet.ac.in</p>
                    <p className='rightcolor'><CopyrightIcon style={{fontSize:'2rem'}}/>MLSA MIET</p>
                </div>
            ):(
                <>
                    <p className='contact'>Contact: mlsa.community@miet.ac.in</p>
                    <div className='rights mobile'>
                        <p className='rightcolor'>Rights Reserved: MLSA MIET</p>
                        <p className='rightcolor'><CopyrightIcon style={{fontSize:'1rem'}}/>MLSA MIET</p>
                    </div>              
                </>
            )}
        </div>
    );
}