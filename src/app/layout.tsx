import { ThemeProviderWrapper } from "@/providers/ThemeProviderWrapper";
import Footer from "@/components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TagsScrollButtons from "@/utils/TagsScrollButtons";
import QueryProvider from "@/providers/QueryClientProvider";
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
        <QueryProvider>
        <ThemeProviderWrapper>
            <Box
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pb: "64px", // отступ под футер
                    bgcolor: 'background.default',
                }}
            >

                    <Container
                        maxWidth="md"
                        sx={{
                            flex: 1,
                            bgcolor: 'background.paper',
                            px: { xs: 2, sm: 3 }, // внутренние отступы
                            py: 3,
                            width: '100%',
                            height: '100vh',
                        }}
                    >
                        <TagsScrollButtons content={content} />
                        {children}

                    </Container>
                </Box>

                {/* Футер */}
                <Box
                    maxWidth="md"
                    sx={{
                        position: "fixed",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "100%",
                        height: "64px",
                        borderTop: "1px solid #eee",
                        bgcolor: 'background.paper',
                        zIndex: 1300,
                    }}
                >
                    <Footer />
                </Box>
                 </ThemeProviderWrapper>
        </QueryProvider>
        </body>
        </html>
    );
}
