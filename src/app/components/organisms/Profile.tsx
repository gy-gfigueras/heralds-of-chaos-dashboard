import { Avatar } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { User } from '@/domain/user';
// import { ERole } from '@/utils/constants/roles.enum';
import { cinzel } from '@/utils/fonts/fonts';

interface ProfileProps {
    user?: User;
}

export default function Profile({ user }: ProfileProps): JSX.Element {
    console.log(user);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    padding: 0,
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                }}
            >
                <Avatar src={user?.picture} sx={{ border: '2px solid #DBAE5A' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={() => ({
                    '& .MuiPaper-root': {
                        backgroundColor: 'theme.palette.background.paper',
                        border: '2px solid #DBAE5A',
                        color: 'text.primary',
                        borderRadius: '8px',
                        marginTop: '15px',
                        width: '150px',
                        height: "auto",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    },
                })}
            >
                <MenuItem sx={{ fontFamily: cinzel.style.fontFamily, fontWeight: 'bold' }} onClick={handleClose}>Profile</MenuItem>
                {/* {user?.roles && user?.roles.includes(ERole.ADMIN) && (
                    <MenuItem sx={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        fontFamily: cinzel.style.fontFamily,
                        fontWeight: 'bold'
                    }}
                        onClick={handleClose}>
                        Admin
                    </MenuItem>
                )} */}
                <MenuItem sx={{ color: 'red' }}>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            fontFamily: cinzel.style.fontFamily,
                            fontWeight: 'bold',
                        }}
                        href={'/api/auth/logout'}
                    >
                        Logout
                    </a>
                </MenuItem>
            </Menu>
        </div>
    );
}
