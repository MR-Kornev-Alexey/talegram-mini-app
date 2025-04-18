import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export default function Hero() {


    return (
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'grey.600',
                    textAlign: 'center',
                }}
            >

                    <Box
                        component="img"
                        sx={{
                            width: '60%', // Установите ширину изображения
                            height: 'auto',
                            margin: 'auto',// Автоматически подстраивает высоту под ширину
                        }}
                        alt="logo" // Альтернативный текст для изображения
                        src="assets/images/main.png"// Путь к изображению
                    />
            </Container>
    );
}