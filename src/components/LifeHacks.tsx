import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';;
import BackToHomeButton from "@/utils/BackToHomeButton";


export default function LifeHacks() {
  return (
    <Container
      id="lifehacks"
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
         Лайфхаки
        </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Раздел «Лайфхаки» — это кладезь простых, но невероятно полезных советов для мам 🤱. <br/>
              Здесь вы найдёте проверенные временем приёмы, маленькие хитрости и вдохновляющие идеи,
              собранные из личного опыта, общения с другими родителями и рекомендаций специалистов.
              <br/><br/>
              <b>Каждый лайфхак — это:</b> <br/>
              🧺 Упрощение повседневных забот и рутинных дел <br/>
              🕊️ Советы, которые дарят больше спокойствия и уверенности <br/>
              🌟 Идеи, которые делают материнство легче, радостнее и осознаннее <br/>

              📌 Берите на заметку, делитесь с подругами и применяйте уже сегодня —
              ведь даже маленький лайфхак может сделать ваш день лучше 💛
          </Typography>

      </Box>
        <BackToHomeButton/>
    </Container>
  );
}
