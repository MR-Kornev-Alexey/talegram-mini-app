import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BackToHomeButton from "@/utils/BackToHomeButton";


export default function Webinars() {
    return (
        <Container
            id="webinars"
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
                    Вебинары
                </Typography>
                <Typography variant="body1" sx={{color: 'text.secondary'}}>
                    Раздел «Вебинары» — это уютное пространство для живого общения, полезной информации и
                    поддержки. <br/>
                    Мы собираем здесь самые важные и трепетные темы, которые касаются будущих и настоящих мам:
                    от подготовки к родам 👶 и грудного вскармливания 🍼 до психологической поддержки 🧠 и развития ребёнка
                    🌱.
                    <br/> <br/>
                    <b>Каждый эфир — это:</b>
                    <br/>
                    💬 Живое общение и ответы на ваши вопросы <br/>
                    📚 Проверенные знания и забота о вашем благополучии <br/>
                    🤝 Поддержка сообщества, где каждая мама чувствует себя не одинокой <br/>

                    📅 Следите за расписанием, подключайтесь в прямом эфире или смотрите записи в удобное время 🎥
                </Typography>

            </Box>
            <BackToHomeButton/>
        </Container>
    );
}
