'use client';
import React, {useRef, useState} from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./style.css";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// Типизация для одного элемента контента
interface ContentItem {
    title: string;
    link: string;
}

// Типизация для пропсов компонента HorizontalScrollButtons
interface HorizontalScrollButtonsProps {
    content: ContentItem[];
}


const TagsScrollButtons: React.FC<HorizontalScrollButtonsProps> = ({content}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const [active, setActive] = useState<number>(-1);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Скорость прокрутки
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleMouseLeave = () => setIsDragging(false);

    const selectActive = (index: number | React.SetStateAction<number>) => {
        if (index === active) {
            return "button-tag-default-active"
        } else {
            return "button-tag-default"
        }
    }
    const selectActiveLink = (index: number | React.SetStateAction<number>) => {
        if (index === active) {
            return "link-active-color"
        } else {
            return "link-default-color"
        }
    }

    const handleSetActive = (index: number) => {
        setActive(index)
    }

    return (
        <Box sx={{py: 2}}>
            <Typography
                component="h2"
                variant="h4"
                gutterBottom
                sx={{color: 'text.primary', pl: 3}}
            >
                Последние публикации
            </Typography>
            <Box
                ref={containerRef}
                sx={{
                    display: {xs: "flex"},
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    width: '98%',
                    gap: 1,
                    paddingLeft: 1,
                    scrollbarWidth: "none",
                    cursor: isDragging ? "grabbing" : "grab",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {content.map((item, index) => (
                    <Box
                        onClick={() => handleSetActive(index)}
                        key={index}
                        className={selectActive(index)}
                        sx={{
                            cursor: "pointer",
                            "&:hover": {
                                backgroundColor: "#f8c0b3",
                            },
                        }}
                    >
                        <Link
                            className={selectActiveLink(index)}
                            href={item.link} underline="none"
                            sx={{
                                color: '#472621',
                                "&:hover": {
                                    fontDecoration: 'none',
                                },
                            }}>
                            {item.title}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TagsScrollButtons;
