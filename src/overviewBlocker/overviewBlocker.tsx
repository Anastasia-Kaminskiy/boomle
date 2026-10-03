import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { contentWrapperSx, blurBackgroundSx, blockerSx } from './styles';
import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material/styles';
import Button from '@mui/material/Button';

interface overviewBlockerProps extends React.PropsWithChildren {

};

export const OverviewBlocker = ({ children } : overviewBlockerProps) => {
    const [isDisabledBlock, setDisabledBlock] = useState<boolean>(false);
    useEffect(() => {
        console.log(`${isDisabledBlock}`)
    });

    if (isDisabledBlock) {
        return (children);
    }
    
    return (
        <Box sx={blockerSx}>
            <Box sx={{position:'absolute', zIndex: 100, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Typography>hello world</Typography>
                <Button variant="contained" onClick={() => setDisabledBlock(true)}>show me anyway</Button>
            </Box>
        
            <Box sx={[contentWrapperSx, blurBackgroundSx] as SxProps}>
                <div inert>{children}</div>
            </Box>
        </Box>
    );
};