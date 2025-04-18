import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from "next/link";


export default function Webinars() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
      >
        <Typography
          component="h2"
          variant="h2"
          gutterBottom
          sx={{ color: 'text.secondary', textTransform: 'uppercase' }}
        >
         Вебинары
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Раздел «Вебинары» — это уютное пространство для живого общения, полезной информации и поддержки. <br/>
          Мы собираем здесь самые важные и трепетные темы, которые касаются будущих и настоящих мам:
          от подготовки к родам 👶 и грудного вскармливания 🍼 до психологической поддержки 🧠 и развития ребёнка 🌱.
          <br/> <br/>
          Каждый эфир — это:
          <br/>
          💬 Живое общение и ответы на ваши вопросы <br/>
          📚 Проверенные знания и забота о вашем благополучии <br/>
          🤝 Поддержка сообщества, где каждая мама чувствует себя не одинокой <br/>

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
