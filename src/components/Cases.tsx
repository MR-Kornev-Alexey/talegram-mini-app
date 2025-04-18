import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BackToHomeButton from "@/utils/BackToHomeButton";


export default function Webinars() {
  return (
    <Container
      id="cases"
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
         Разборы
        </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Раздел «Разборы» — это пространство живого диалога и искренней поддержки от Елены 👩‍⚕️. <br/>
              В прямом эфире она вместе с мамой обсуждает конкретные ситуации, связанные с малышом 👶,
              помогает разобраться в тревогах, даёт рекомендации и делится профессиональным взглядом на ситуацию.
              <br/><br/>
              <b>Каждый разбор — это:</b>  <br/>
              🧩 Индивидуальный подход и внимательное отношение к каждой семье <br/>
              🧘 Спокойный, обнадёживающий разбор волнующих тем <br/>
              🧠 Мягкое направление и советы, основанные на опыте и знании детской психологии <br/>

              💻 Присоединяйтесь к эфиру или смотрите записи — возможно, вы узнаете в историях других и свою ситуацию ❤️
          </Typography>
      </Box>
        <BackToHomeButton/>
    </Container>
  );
}
