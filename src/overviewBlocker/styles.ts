import { SxProps, Theme } from '@mui/material/styles';

export const blockerSx : SxProps<Theme> = {
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    overflowY:'hidden', 
    borderRadius:'20px'
};

export const contentWrapperSx : SxProps<Theme> = {
    maxHeight: '20vh',
    minWidth: 'stretch',
    overflowY: 'auto',
    overflowX: 'hidden',
    marginTop: '-8px',
    paddingTop: '8px',
    // paddingLeft: '20px',
    // marginLeft: '-20px',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    borderRadius: '20px',
    backgroundColor: 'rgb(50 52 63)',
    // pointerEvents: 'none',
};

export const blurBackgroundSx : SxProps<Theme> = {
    filter: 'blur(5px) opacity(0.3)'
};