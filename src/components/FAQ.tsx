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

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

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
        pt: { xs: 4, sm: 12 },
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
            sx={{ color: 'text.secondary', textTransform: 'uppercase', textAlign: 'center' }}
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
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{ color: 'icons.main', backgroundColor: 'brick.main',
            }}
          >
            <Typography component="span" variant="subtitle2" >
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              You can reach our customer support team by emailing&nbsp;
              &nbsp;or calling our toll-free number. We&apos;re here to assist you
              promptly.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
            sx={{ color: 'icons.main', backgroundColor: 'brick.main',
            }}
          >
            <Typography component="span" variant="subtitle2">
              Can I return the product if it doesn&apos;t meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '90%' } }}
            >
              Absolutely! We offer a hassle-free return policy. If you&apos;re not
              completely satisfied, you can return the product within [number of
              days] days for a full refund or exchange.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
            sx={{ color: 'icons.main', backgroundColor: 'brick.main',
            }}
          >
            <Typography component="span" variant="subtitle2">
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Our product distinguishes itself through its adaptability, durability,
              and innovative features. We prioritize user satisfaction and
              continually strive to exceed expectations in every aspect.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel4')}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
            sx={{ color: 'icons.main', backgroundColor: 'brick.main',
            }}
          >
            <Typography component="span" variant="subtitle2">
              Is there a warranty on the product, and what does it cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Yes, our product comes with a [length of warranty] warranty. It covers
              defects in materials and workmanship. If you encounter any issues
              covered by the warranty, please contact our customer support for
              assistance.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <BackToHomeButton/>
    </Container>
  );
}
