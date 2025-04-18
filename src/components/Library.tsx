import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from "next/link";


export default function Library() {
  return (
    <Container
      id="library"
      sx={{
          pt: 4,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
      }}
    >
        <Box>
            <Typography
                component="h2"
                variant="h2"
                gutterBottom
                sx={{ color: 'text.secondary', textTransform: 'uppercase', textAlign: 'center', mb:4 }}
            >
         Библиотека
        </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Раздел «Библиотека» — это тёплый уголок знаний и вдохновения для каждой мамы 📖✨. <br/>
              Здесь собраны самые важные материалы: от статей и памяток до рекомендаций специалистов и тематических подборок.
              Всё, что помогает понять, почувствовать и пройти путь материнства осознанно и с любовью 💞.
              <br/><br/>
              <b>В нашей библиотеке вы найдёте:</b> <br/>
              📝 Полезные статьи и инструкции <br/>
              🎧 Аудио- и видеоматериалы для удобного восприятия <br/>
              🌼 Рекомендации по уходу за малышом <br/>

              📚 Читайте, сохраняйте, делитесь — пусть знания всегда будут под рукой и приносят спокойствие 🌟
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
