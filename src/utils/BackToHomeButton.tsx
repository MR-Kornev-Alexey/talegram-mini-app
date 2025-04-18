'use client';

import Link from 'next/link';
import Button from '@mui/material/Button';

export default function BackToHomeButton() {
    return (
        <Link href="/" passHref>
    <Button
        variant="outlined"
    sx={{
        borderRadius: 2,
            textTransform: 'uppercase',
            border: '1px solid #472621',
            color: 'icons.main',
            '&:hover': {
            color: 'icons.light',
            border: '1px solid rgba(103,16,16,0.81)',
        },
    }}
>
    На главную
    </Button>
    </Link>
);
}
