import { ThemeProviderWrapper } from "@/providers/ThemeProviderWrapper";
import Footer from "@/components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TagsScrollButtons from "@/utils/TagsScrollButtons";
const content = [
    {title: "Все", link: "#hardware"},
    {title: "Разборы", link: "#tariffing"},
    {title: "Вебинары", link: "#price"},
    {title: "Лайфхаки", link: "#reliability"},
    {title: "Вопрос-Ответ", link: "#faq"},
    {title: "Библиотека", link: "#free-year"},
];
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body suppressHydrationWarning style={{ margin: 0 }}>
        <ThemeProviderWrapper>
            {/* Контейнер всей страницы с фиксированным футером внутри */}
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    pb: "64px", // отступ под футер
                    backgroundColor: 'beige.main',
                }}
            >
                <Container maxWidth="sm" sx={{ flex: 1, width: '100%' }}>
                    {children}
                    <TagsScrollButtons content={content} />
                </Container>

                {/* Контейнер для футера фиксированной ширины */}
                <Box
                    sx={{
                        position: "fixed",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        maxWidth: "600px", // = sm
                        height: "64px",
                        borderTop: "1px solid #eee",
                        backgroundColor: 'brick.main',
                        zIndex: 1300,
                    }}
                >
                    <Footer />
                </Box>
            </Box>
        </ThemeProviderWrapper>
        </body>
        </html>
    );
}
