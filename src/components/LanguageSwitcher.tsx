import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import {useTranslations} from 'next-intl';
const languages = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ru', label: 'Русский' },
];

export default function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const pathname = usePathname();
    const router = useRouter();

    const currentLocale = pathname.split('/')[1] || 'en';

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChangeLocale = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale; // заменить текущий локальный сегмент
        router.push(segments.join('/'));
        handleClose();
    };
    const t = useTranslations('HomePage');
    return (
        <>
            <Tooltip title= {t('NavBar.change')}>
        <IconButton onClick={handleOpen} color="inherit">
        <LanguageIcon />
        </IconButton>
        </Tooltip>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {languages.map(({ code, label }) => (
                <MenuItem
                    key={code}
            selected={code === currentLocale}
    onClick={() => handleChangeLocale(code)}
>
    {label}
    </MenuItem>
))}
    </Menu>
    </>
);
}
