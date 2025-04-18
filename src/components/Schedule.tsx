import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from "next/link";


export default function Schedule() {
  return (
    <Container
      id="schedule"
      sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 8 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 3 },
      }}
    >
        <Box>
            <Typography
                component="h2"
                variant="h2"
                gutterBottom
                sx={{ color: 'text.secondary', textTransform: 'uppercase', textAlign: 'center', mb:4 }}
            >
          Расписание
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            📅 Следите за расписанием, подключайтесь в прямом эфире или смотрите записи в удобное время 🎥
        </Typography>

      </Box>
      <Link href="/" passHref>
      <Button variant="outlined" sx={{    textTransform: 'uppercase', border: '1px solid #472621',color: 'icons.main', '&:hover': {color: 'icons.light', }}}>
        На главную
      </Button>
    </Link>
    </Container>
  );
}
