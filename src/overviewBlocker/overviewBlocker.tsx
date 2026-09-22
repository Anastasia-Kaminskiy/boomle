import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { blockerWrapperSx } from './styles';
import Typography from '@mui/material/Typography';

interface overviewBlockerProps extends React.PropsWithChildren {

};

export const OverviewBlocker = ({children} : overviewBlockerProps) => {
    useEffect(() => {console.log("I'm still standing!")});
    
    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Box sx={{position:'fixed', zIndex: 100}}>
                <Typography>hello world</Typography>
            </Box>

            <Box sx={{...blockerWrapperSx, position: 'relative'}}>
                {children}
            </Box>
        </Box>
    );
};