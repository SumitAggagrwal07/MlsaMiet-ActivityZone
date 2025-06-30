import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useMediaQuery from '@mui/material/useMediaQuery';
import './navbar.css';

export default function Navbar(){

    const [value, setValue] = React.useState('one');
    const [menuopen, setMenuopen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const isMobile = useMediaQuery('(max-width:768px)');

    const handleChange = (event, newValue) => {
        setValue(newValue);

        const IdMap = {
            one: 'home',
            two: 'modules',
            three: 'process',
        };

        const section = document.getElementById(IdMap[newValue]);
        if (section) {
            const y = section.offsetTop - 96;
            window.scrollTo({top: y,behavior: 'smooth'});
        }
    };

    const menubarChange = () =>{
        setMenuopen(!menuopen);
    };

    const handleMenuClose = (id) => {
        setMenuopen(false);
        if (id) {
            const section = document.getElementById(id);
            if (section) {
                const y = section.offsetTop - 150;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    return(
        <div className='navbar'>
            {!isMobile ?(
                <>
                    <img
                        src="/mlsa_logo.png"
                        alt="MLSALogo"
                        style={{height: '6.5rem', width: '6.5rem', objectFit: 'contain',marginLeft :'1rem'}}
                    />
                    <Box sx={{width: '100%', marginTop:'0.6rem',flexGrow: 1 }}>
                        <Tabs value={value} onChange={handleChange} variant="fullWidth">
                            <Tab value="one" label="Home" sx={{ fontSize: '0.9rem' }} />
                            <Tab value="two" label="Modules" sx={{ fontSize: '0.9rem' }} />
                            <Tab value="three" label="Process" sx={{ fontSize: '0.9rem' }} />
                        </Tabs>
                    </Box>
                </>
            ):(
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <MenuIcon className={menuopen ? 'menubarActive' : 'menubarClose'} sx={{ fontSize: '1.5rem', color: 'rgb(0, 67, 128)', marginLeft:'0.8rem' }} onClick={menubarChange} />
                    <img
                        src="/mlsa_logo.png"
                        alt="MLSALogo"
                        style={{height: '5rem', width: '5rem', objectFit: 'contain', marginLeft:'0.1rem'}}
                    />
                </div>
            )}

            <img 
                src="/MlsaMiet.jpg"
                alt="MLSAMIETtext_Logo"
                className='imgmlsamiet'
            />

            <Drawer anchor="left" open={menuopen} onClose={() => setMenuopen(false)}>
                <List sx={{ width: 200 }}>
                    {[
                        { text: 'Back', id: null },
                        { text: 'Home', id: 'home' },
                        { text: 'Modules', id: 'modules' },
                        { text: 'Process', id: 'process' },
                        { text: 'Connect with us', id: 'connect' },
                    ].map((item, index) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton selected={activeMenuItem === item.id} onClick={() => {
                                if (index === 0) {
                                    setMenuopen(false);
                                } else {
                                    setActiveMenuItem(item.id);
                                    handleMenuClose(item.id);
                                }
                            }}>
                                {(index=== 0) ? (
                                    <ListItemIcon>
                                        <ArrowBackIosNewIcon style={{fontSize:"1.1rem",marginLeft:'8rem'}} />
                                    </ListItemIcon>
                                ):(
                                    <ListItemText
                                        primaryTypographyProps={{ fontSize: '0.85rem' }}
                                        primary={item.text}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}