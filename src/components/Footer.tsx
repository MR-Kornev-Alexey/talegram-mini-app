import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Footer() {
    return (
        <footer
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                boxShadow: '0 -1px 4px rgba(0, 0, 0, 0.1)',
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '64px',
                padding: '0 24px',
                zIndex: 1000,
                width: '100%',
                backgroundColor: 'brick.main',
            }}
        >
            <Link href="/">
                <HomeIcon fontSize='large' sx={{color: 'primary.light', '&:hover': {color: 'primary.dark'}}}/>
            </Link>
            <Link href="/schedule">
                <CalendarMonthIcon fontSize='large' sx={{color: 'primary.light', '&:hover': {color: 'primary.dark'}}}/>
            </Link>
            <Link href="/library">
                <AutoStoriesIcon fontSize='large' sx={{color: 'primary.light', '&:hover': {color: 'primary.dark'}}}/>
            </Link>
            <Link href="/favorites">
                <FavoriteBorderIcon fontSize='large' sx={{color: 'primary.light', '&:hover': {color: 'primary.dark'}}}/>
            </Link>
        </footer>
    );
}
