import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from "@mui/material/Link";

const items = [
  {
    title: 'Разборы',
      img: "assets/images/n-case.png",
      link: '/cases',
  },
  {
    title: 'Вебинары',
      img: "assets/images/n-webinar.png",
      link: '/webinars'
  },
  {
    title: 'Лайфхаки',
      img: "assets/images/n-hack.png",
      link: '/life-hacks'
  },
    {
        title: 'Вопрос - ответ',
        img: "assets/images/n-q-a.png",
        link: '/q&a'
    },
  {
    title: 'Чат',
      img: "assets/images/n-chat.png",
      link: 'https://t.me/+2N4G1Y1-lspiMDNi'
  }
];

export default function MainButtons() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 2},
        pb: { xs: 4, sm: 4 },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >

          <Box
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1, // Отступ между элементами
                  width: '100%'
              }}
          >
              {items.map((item, index) => (
                  <Link href={item.link}  key={index} sx={{ textDecoration: 'none' }}>
                  <Card

                      sx={{
                          border: '1px solid #472621',
                          borderRadius: 4,
                          backgroundColor: 'beige.main',
                          p: 1,
                          cursor: 'pointer',
                          width: '100%' // Занимает всю ширину контейнера
                      }}
                  >
                      {/* Горизонтальный контейнер внутри карточки */}
                      <Box
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 2
                          }}
                      >
                          {/* Левая иконка */}
                          <Box
                              component="img"
                              sx={{
                                  width: 40,
                                  height: 'auto',
                                  flexShrink: 0
                              }}
                              alt={item.title}
                              src={item.img}
                          />

                          {/* Центральный текст */}
                          <Typography
                              sx={{
                                  fontWeight: 'bold',
                                  color: 'text.primary',
                                  textTransform: 'uppercase',
                                  fontSize: 18,
                                  flexGrow: 1,
                                  textAlign: 'center',
                                  textDecoration: 'none',
                              }}
                          >
                              {item.title}
                          </Typography>

                          {/* Правая иконка */}
                          <ArrowForwardIosIcon
                              sx={{
                                  color: '#472621',
                                  flexShrink: 0
                              }}
                              fontSize="large"
                          />
                      </Box>
                  </Card>
                  </Link>
              ))}
          </Box>
      </Container>
    </Box>
  );
}
