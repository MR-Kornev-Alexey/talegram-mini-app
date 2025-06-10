"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BackToHomeButton from "@/utils/BackToHomeButton";
import webinars from '@/data/webinars';
import Card from "@mui/material/Card";
import {CardActionArea} from '@mui/material';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import {formatDate} from "@/utils/formatDate";
import Link from "@mui/material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {sortByDateDesc} from "@/utils/sortByDate";
import {useState} from "react";


export default function Webinars() {
    const sortingWebinars = sortByDateDesc(webinars)
    const selectFavorite = (uuid: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelected(prev =>
            prev.includes(uuid)
                ? prev.filter(id => id !== uuid)
                : [...prev, uuid]
        );
    };
    const [selected, setSelected] = useState<string[]>([]);
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
                    sx={{color: 'text.secondary', textTransform: 'uppercase', textAlign: 'center', mb: 4}}
                >
                    Вебинары
                </Typography>
                <Typography variant="body1" sx={{color: 'text.secondary', mb: 4}}>
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
                <Box sx={{ my:1}}>
                    selected:   {selected}
                </Box>
                {sortingWebinars.map((item, index) => (
                    <Card sx={{
                        maxWidth: '100%', gap: 1, mb: 2, border: '1px solid #472621',
                        borderRadius: 4,
                        backgroundColor: 'beige.main',
                    }} key={index}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    {formatDate(item.date)}

                                    {/* Изменяемая иконка */}
                                    {selected.includes(item.uuid) ? (
                                        <FavoriteIcon
                                            sx={{
                                                color: 'darkred',
                                                transition: 'color 0.3s',
                                                '&:hover': { color: 'darkred' }
                                            }}
                                            fontSize="medium"
                                            onClick={selectFavorite(item.uuid)}
                                        />
                                    ) : (
                                        <FavoriteBorderIcon
                                            sx={{
                                                color: 'text.secondary',
                                                transition: 'color 0.3s',
                                                '&:hover': { color: 'red' }
                                            }}
                                            fontSize="medium"
                                            onClick={selectFavorite(item.uuid)}
                                        />
                                    )}
                                </Typography>

                                <Typography gutterBottom variant="h5" component="div" sx={{maxWidth: '96%'}}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
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
                                    sx={{color: 'text.secondary'}}
                                >
                                    Перейти по ссылке в Телеграм канал
                                </Typography>
                                <ArrowForwardIosIcon
                                    sx={{
                                        color: 'text.secondary',
                                        flexShrink: 0,
                                    }}
                                    fontSize="small"
                                />
                            </Link>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <BackToHomeButton/>
        </Container>
    );
}
