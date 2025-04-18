"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackToHomeButton from "@/utils/BackToHomeButton";
import qa from "@/data/q&a";
import {formatDate} from "@/utils/formatDate";
import {sortByDateDesc} from "@/utils/sortByDate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const sortingData = sortByDateDesc(qa)
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
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
          Вопросы - ответы
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Раздел «Вопросы-Ответы» — это безопасное и доверительное пространство, где вы можете получить поддержку и рекомендации по самым волнующим темам 🤔💬. <br/>
          Елена отвечает на вопросы мам в формате записей, помогая разобраться в сложных ситуациях,
          развеять тревоги и почувствовать, что вы не одни на этом пути.
          <br/><br/>
          <b>Каждый выпуск — это:</b> <br/>
          ❓ Открытые и честные ответы на важные вопросы <br/>
          🧘‍♀️ Успокаивающие и практичные советы <br/>
          🧑‍⚕️ Мнение эксперта, основанное на опыте и заботе <br/>

          📬 Вы можете отправить свой вопрос в комментарии к публикации, так как важны каждое слово и каждая история 💖
        </Typography>
      </Box>
      <Box sx={{ width: '100%',    }}>
        {sortingData.map((item, index) => {
          const panelId = `panel${index}`;
          return (
              <Accordion
                  expanded={expanded.includes(panelId)}
                  onChange={handleChange(panelId)}
                  key={index}
                  sx={{
                      '& .MuiAccordionSummary-root, & .MuiAccordionDetails-root': {
                          minHeight: 64, // фиксированная высота
                          alignItems: 'center',
                      },
                  }}
              >
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${panelId}-content`}
                      id={`${panelId}-header`}
                      sx={{
                          color: 'icons.main',
                          backgroundColor: 'brick.main',
                      }}
                  >
                      <Typography component="span" variant="subtitle2">
                          {formatDate(item.date)}{" | "}{item.title}
                      </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                      <Link
                          href={item.link}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              width: '100%',
                              textDecoration: 'none',
                          }}
                      >
                          <Typography
                              component="span"
                              variant="subtitle2"
                              sx={{ color: 'icons.main' }}
                          >
                              Перейти по ссылке в Телеграм канал
                          </Typography>
                          <ArrowForwardIosIcon
                              sx={{
                                  color: '#472621',
                                  flexShrink: 0,
                              }}
                              fontSize="small"
                          />
                      </Link>
                  </AccordionDetails>
              </Accordion>

          );
        })}
      </Box>
      <BackToHomeButton/>
    </Container>
  );
}
