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
            border: '1px solid #6C5C5F',
            color: 'primary.light',
            '&:hover': {
            color: 'primary.dark',
            border: '1px solid #43393b',
        },
    }}
>
    На главную
    </Button>
    </Link>
);
}
