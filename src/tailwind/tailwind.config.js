module.exports = {
    "presets": [
        {
            "theme": {
                "extend": {
                    "screens": {
                        "sm": "640px",
                        "md": "768px",
                        "lg": "1024px",
                        "xl": "1280px",
                        "2xl": "1536px"
                    },
                    "colors": {
                        "current": "currentColor",
                        "transparent": "transparent",
                        "black": "#000",
                        "white": "#fff",
                        "gray": {
                            "50": "#F9FAFB",
                            "100": "#F3F4F6",
                            "200": "#E5E7EB",
                            "300": "#D1D5DB",
                            "400": "#9CA3AF",
                            "500": "#6B7280",
                            "600": "#4B5563",
                            "700": "#374151",
                            "800": "#1F2937",
                            "900": "#111827"
                        },
                        "red": {
                            "50": "#fef2f2",
                            "100": "#fee2e2",
                            "200": "#fecaca",
                            "300": "#fca5a5",
                            "400": "#f87171",
                            "500": "#ef4444",
                            "600": "#dc2626",
                            "700": "#b91c1c",
                            "800": "#991b1b",
                            "900": "#7f1d1d"
                        },
                        "yellow": {
                            "50": "#fffbeb",
                            "100": "#fef3c7",
                            "200": "#fde68a",
                            "300": "#fcd34d",
                            "400": "#fbbf24",
                            "500": "#f59e0b",
                            "600": "#d97706",
                            "700": "#b45309",
                            "800": "#92400e",
                            "900": "#78350f"
                        },
                        "green": {
                            "50": "#ecfdf5",
                            "100": "#d1fae5",
                            "200": "#a7f3d0",
                            "300": "#6ee7b7",
                            "400": "#34d399",
                            "500": "#10b981",
                            "600": "#059669",
                            "700": "#047857",
                            "800": "#065f46",
                            "900": "#064e3b"
                        },
                        "blue": {
                            "50": "#EFF6FF",
                            "100": "#DBEAFE",
                            "200": "#BFDBFE",
                            "300": "#93C5FD",
                            "400": "#60A5FA",
                            "500": "#3B82F6",
                            "600": "#2563EB",
                            "700": "#1D4ED8",
                            "800": "#1E40AF",
                            "900": "#1E3A8A"
                        },
                        "indigo": {
                            "50": "#eef2ff",
                            "100": "#e0e7ff",
                            "200": "#c3dafe",
                            "300": "#a5b4fc",
                            "400": "#818cf8",
                            "500": "#6366f1",
                            "600": "#4f46e5",
                            "700": "#4338ca",
                            "800": "#3730a3",
                            "900": "#312e81"
                        },
                        "purple": {
                            "50": "#f5f3ff",
                            "100": "#ede9fe",
                            "200": "#ddd6fe",
                            "300": "#c4b5fd",
                            "400": "#a78bfa",
                            "500": "#8b5cf6",
                            "600": "#7c3aed",
                            "700": "#6d28d9",
                            "800": "#5b21b6",
                            "900": "#4c1d95"
                        },
                        "pink": {
                            "50": "#fdf2f8",
                            "100": "#fce7f3",
                            "200": "#fbcfe8",
                            "300": "#f9a8d4",
                            "400": "#f472b6",
                            "500": "#ec4899",
                            "600": "#db2777",
                            "700": "#be185d",
                            "800": "#9d174d",
                            "900": "#831843"
                        }
                    },
                    "spacing": {
                        "0": "0px",
                        "1": "0.25rem",
                        "2": "0.5rem",
                        "3": "0.75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "11": "2.75rem",
                        "12": "3rem",
                        "14": "3.5rem",
                        "16": "4rem",
                        "17": "4.25rem",
                        "18": "4.5rem",
                        "20": "5rem",
                        "24": "6rem",
                        "26": "6.5rem",
                        "28": "7rem",
                        "30": "7.5rem",
                        "32": "8rem",
                        "34": "8.5rem",
                        "36": "9rem",
                        "40": "10rem",
                        "44": "11rem",
                        "48": "12rem",
                        "52": "13rem",
                        "56": "14rem",
                        "60": "15rem",
                        "64": "16rem",
                        "72": "18rem",
                        "80": "20rem",
                        "96": "24rem",
                        "px": "1px",
                        "0.5": "0.125rem",
                        "1.5": "0.375rem",
                        "2.5": "0.625rem",
                        "3.5": "0.875rem"
                    },
                    "backdropBrightness": (theme) => theme('brightness'),
                    "backdropContrast": (theme) => theme('contrast'),
                    "backdropGrayscale": (theme) => theme('grayscale'),
                    "backdropHueRotate": (theme) => theme('hueRotate'),
                    "backdropInvert": (theme) => theme('invert'),
                    "backdropOpacity": (theme) => theme('opacity'),
                    "backdropSaturate": (theme) => theme('saturate'),
                    "backdropSepia": (theme) => theme('sepia'),
                    "backgroundColor": theme => ({
            ...theme('colors'),
            body: '#fff',
        }),
                    "backgroundImage": {
                        "none": "none",
                        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
                        "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
                        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
                        "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
                        "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
                        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
                        "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
                        "gradient-blue": "linear-gradient(135deg, #5ECDEF 0%, #ED1378 100%)",
                        "gradient-red": "linear-gradient(109deg, rgba(249,234,237,1) 0%, rgba(236,75,145,1) 60%, rgba(227,101,164,1) 100%)",
                        "gradient-red-light": "linear-gradient(180deg, #F9D1AA 0%, #EF1460 100%)",
                        "gradient-orange-light": "linear-gradient(180deg, #F9D1AA 0%, #EF1460 200%)",
                        "gradient-orange": "linear-gradient(98.24deg, #FC8B13 0%, #FA35C1 100%)",
                        "gradient-green": "linear-gradient(104deg, rgba(223,244,244,1) 0%, rgba(60,231,181,1) 40%)",
                        "gradient-green-dark": "linear-gradient(98.24deg, #06E992 0%, #0289EB 100%)",
                        "gradient-pink": "linear-gradient(98.24deg, #C9275A 0%, #DD15E8 100%)",
                        "gradient-aqua": "linear-gradient(98.24deg, #55F7DC 0%, #5BC9F9 100%)",
                        "gradient-radial-gray": "radial-gradient(50% 50% at 50% 50%, rgba(243, 244, 246, 0) 0%, #F3F4F6 100%)",
                        "gradient-radial-white": "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
                        "gradient-radial-dark": "radial-gradient(50% 50% at 50% 50%, rgba(17, 24, 39, 0) 0%, #111827 100%)",
                        "gradient-radial-dark-light": "radial-gradient(50% 50% at 50% 50%, rgba(31, 41, 55, 0) 0%, #1F2937 100%)"
                    },
                    "backgroundOpacity": (theme) => theme('opacity'),
                    "backgroundPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "backgroundSize": {
                        "auto": "auto",
                        "cover": "cover",
                        "contain": "contain"
                    },
                    "blur": {
                        "0": "0",
                        "none": "0",
                        "sm": "4px",
                        "DEFAULT": "8px",
                        "md": "12px",
                        "lg": "16px",
                        "xl": "24px",
                        "2xl": "40px",
                        "3xl": "64px"
                    },
                    "backdropBlur": (theme) => theme('blur'),
                    "brightness": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "borderColor": theme => ({
            ...theme('colors'),
            DEFAULT: '#E5E7EB',
        }),
                    "borderOpacity": (theme) => theme('opacity'),
                    "borderRadius": {
                        "none": "0",
                        "sm": "0.125rem",
                        "DEFAULT": "0.25rem",
                        "md": "0.375rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "2xl": "0.875rem",
                        "3xl": "1.25rem",
                        "4xl": "1.5rem",
                        "full": "9999px"
                    },
                    "borderWidth": {
                        "0": "0",
                        "2": "2px",
                        "3": "3px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "1px"
                    },
                    "boxShadow": {
                        "sm": "0px 2px 2px rgba(0, 0, 0, 0.06)",
                        "DEFAULT": "0px 4px 4px rgba(0, 0, 0, 0.06)",
                        "md": "0px 4px 12px #F7F7F7",
                        "lg": "0px 8px 8px rgba(0, 0, 0, 0.06)",
                        "xl": "0px 4px 12px rgba(2, 2, 18, 0.2)",
                        "inner": "inset 0px 4px 4px rgba(0, 0, 0, 0.06)",
                        "none": "none"
                    },
                    "caretColor": (theme) => theme('colors'),
                    "contrast": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "100": "1",
                        "125": "1.25",
                        "150": "1.5",
                        "200": "2"
                    },
                    "container": [],
                    "cursor": {
                        "auto": "auto",
                        "DEFAULT": "default",
                        "pointer": "pointer",
                        "wait": "wait",
                        "text": "text",
                        "move": "move",
                        "not-allowed": "not-allowed"
                    },
                    "divideColor": (theme) => theme('borderColor'),
                    "divideOpacity": (theme) => theme('borderOpacity'),
                    "divideWidth": (theme) => theme('borderWidth'),
                    "dropShadow": {
                        "sm": "0 1px 1px rgba(0,0,0,0.05)",
                        "DEFAULT": [
                            "0 1px 2px rgba(0, 0, 0, 0.1)",
                            "0 1px 1px rgba(0, 0, 0, 0.06)"
                        ],
                        "md": [
                            "0 4px 3px rgba(0, 0, 0, 0.07)",
                            "0 2px 2px rgba(0, 0, 0, 0.06)"
                        ],
                        "lg": [
                            "0 10px 8px rgba(0, 0, 0, 0.04)",
                            "0 4px 3px rgba(0, 0, 0, 0.1)"
                        ],
                        "xl": [
                            "0 20px 13px rgba(0, 0, 0, 0.03)",
                            "0 8px 5px rgba(0, 0, 0, 0.08)"
                        ],
                        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
                        "none": "0 0 #0000"
                    },
                    "fill": {
                        "current": "currentColor"
                    },
                    "grayscale": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "hueRotate": {
                        "0": "0deg",
                        "15": "15deg",
                        "30": "30deg",
                        "60": "60deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-60": "-60deg",
                        "-30": "-30deg",
                        "-15": "-15deg"
                    },
                    "invert": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "flex": {
                        "1": "1 1 0%",
                        "auto": "1 1 auto",
                        "initial": "0 1 auto",
                        "none": "none"
                    },
                    "flexGrow": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "flexShrink": {
                        "0": "0",
                        "DEFAULT": "1"
                    },
                    "fontFamily": {
                        "body": "\"Satoshi\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "heading": "\"Satoshi\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "sans": "\"Satoshi\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
                        "serif": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
                        "mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace"
                    },
                    "fontSize": {
                        "xs": [
                            "0.75rem",
                            {
                                "lineHeight": "1rem"
                            }
                        ],
                        "sm": [
                            "0.875rem",
                            {
                                "lineHeight": "1.25rem"
                            }
                        ],
                        "base": [
                            "1rem",
                            {
                                "lineHeight": "1.5rem"
                            }
                        ],
                        "lg": [
                            "1.125rem",
                            {
                                "lineHeight": "1.75rem"
                            }
                        ],
                        "xl": [
                            "1.25rem",
                            {
                                "lineHeight": "1.75rem"
                            }
                        ],
                        "2xl": [
                            "1.5rem",
                            {
                                "lineHeight": "1.33"
                            }
                        ],
                        "3xl": [
                            "1.875rem",
                            {
                                "lineHeight": "1.26"
                            }
                        ],
                        "4xl": [
                            "2.25rem",
                            {
                                "lineHeight": "1.22"
                            }
                        ],
                        "5xl": [
                            "3rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ],
                        "6xl": [
                            "3.75rem",
                            {
                                "lineHeight": "1.2"
                            }
                        ],
                        "7xl": [
                            "4.5rem",
                            {
                                "lineHeight": "1.25"
                            }
                        ]
                    },
                    "fontWeight": {
                        "hairline": "100",
                        "thin": "200",
                        "light": "300",
                        "normal": "400",
                        "medium": "500",
                        "semibold": "600",
                        "bold": "700",
                        "extrabold": "800",
                        "black": "900"
                    },
                    "gap": (theme) => theme('spacing'),
                    "gradientColorStops": (theme) => theme('colors'),
                    "gridAutoColumns": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridAutoRows": {
                        "auto": "auto",
                        "min": "min-content",
                        "max": "max-content",
                        "fr": "minmax(0, 1fr)"
                    },
                    "gridColumn": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-7": "span 7 \/ span 7",
                        "span-8": "span 8 \/ span 8",
                        "span-9": "span 9 \/ span 9",
                        "span-10": "span 10 \/ span 10",
                        "span-11": "span 11 \/ span 11",
                        "span-12": "span 12 \/ span 12",
                        "span-full": "1 \/ -1"
                    },
                    "gridColumnEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridColumnStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "13": "13",
                        "auto": "auto"
                    },
                    "gridRow": {
                        "auto": "auto",
                        "span-1": "span 1 \/ span 1",
                        "span-2": "span 2 \/ span 2",
                        "span-3": "span 3 \/ span 3",
                        "span-4": "span 4 \/ span 4",
                        "span-5": "span 5 \/ span 5",
                        "span-6": "span 6 \/ span 6",
                        "span-full": "1 \/ -1"
                    },
                    "gridRowStart": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridRowEnd": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "auto": "auto"
                    },
                    "gridTemplateColumns": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "7": "repeat(7, minmax(0, 1fr))",
                        "8": "repeat(8, minmax(0, 1fr))",
                        "9": "repeat(9, minmax(0, 1fr))",
                        "10": "repeat(10, minmax(0, 1fr))",
                        "11": "repeat(11, minmax(0, 1fr))",
                        "12": "repeat(12, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "gridTemplateRows": {
                        "1": "repeat(1, minmax(0, 1fr))",
                        "2": "repeat(2, minmax(0, 1fr))",
                        "3": "repeat(3, minmax(0, 1fr))",
                        "4": "repeat(4, minmax(0, 1fr))",
                        "5": "repeat(5, minmax(0, 1fr))",
                        "6": "repeat(6, minmax(0, 1fr))",
                        "none": "none"
                    },
                    "height": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            '1\/5': '20%',
            '2\/5': '40%',
            '3\/5': '60%',
            '4\/5': '80%',
            '1\/6': '16.666667%',
            '2\/6': '33.333333%',
            '3\/6': '50%',
            '4\/6': '66.666667%',
            '5\/6': '83.333333%',
            full: '100%',
            screen: '100vh',
        }),
                    "inset": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            full: '100%',
            '-1\/2': '-50%',
            '-1\/3': '-33.333333%',
            '-2\/3': '-66.666667%',
            '-1\/4': '-25%',
            '-2\/4': '-50%',
            '-3\/4': '-75%',
            '-full': '-100%',
        }),
                    "keyframes": {
                        "spin": {
                            "to": {
                                "transform": "rotate(360deg)"
                            }
                        },
                        "ping": {
                            "75%, 100%": {
                                "transform": "scale(2)",
                                "opacity": "0"
                            }
                        },
                        "pulse": {
                            "50%": {
                                "opacity": ".5"
                            }
                        },
                        "bounce": {
                            "0%, 100%": {
                                "transform": "translateY(-25%)",
                                "animationTimingFunction": "cubic-bezier(0.8,0,1,1)"
                            },
                            "50%": {
                                "transform": "none",
                                "animationTimingFunction": "cubic-bezier(0,0,0.2,1)"
                            }
                        }
                    },
                    "letterSpacing": {
                        "tighter": "-0.05em",
                        "tight": "-0.02em",
                        "normal": "0em",
                        "wide": "0.025em",
                        "wider": "0.05em",
                        "widest": "0.1em"
                    },
                    "lineHeight": {
                        "3": ".75rem",
                        "4": "1rem",
                        "5": "1.25rem",
                        "6": "1.5rem",
                        "7": "1.75rem",
                        "8": "2.025rem",
                        "9": "2.25rem",
                        "10": "2.5rem",
                        "none": "1",
                        "tight": "1.1",
                        "snug": "1.3",
                        "normal": "1.5",
                        "relaxed": "1.8",
                        "loose": "2"
                    },
                    "listStyleType": {
                        "none": "none",
                        "disc": "disc",
                        "decimal": "decimal"
                    },
                    "margin": (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
                    "maxHeight": {
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "maxWidth": {
                        "none": "none",
                        "2xs": "18rem",
                        "xs": "20rem",
                        "sm": "24rem",
                        "md": "28rem",
                        "lg": "32rem",
                        "xl": "36rem",
                        "2xl": "42rem",
                        "3xl": "48rem",
                        "4xl": "56rem",
                        "5xl": "64rem",
                        "6xl": "72rem",
                        "7xl": "80rem",
                        "8xl": "87rem",
                        "full": "100%",
                        "min": "min-content",
                        "max": "max-content",
                        "prose": "65ch"
                    },
                    "minHeight": {
                        "0": "0",
                        "full": "100%",
                        "screen": "100vh"
                    },
                    "minWidth": {
                        "0": "0",
                        "full": "100%"
                    },
                    "objectPosition": {
                        "bottom": "bottom",
                        "center": "center",
                        "left": "left",
                        "left-bottom": "left bottom",
                        "left-top": "left top",
                        "right": "right",
                        "right-bottom": "right bottom",
                        "right-top": "right top",
                        "top": "top"
                    },
                    "opacity": {
                        "0": "0",
                        "5": "0.05",
                        "10": "0.1",
                        "20": "0.2",
                        "25": "0.25",
                        "30": "0.3",
                        "40": "0.4",
                        "50": "0.5",
                        "60": "0.6",
                        "70": "0.7",
                        "75": "0.75",
                        "80": "0.8",
                        "90": "0.9",
                        "95": "0.95",
                        "100": "1"
                    },
                    "order": {
                        "1": "1",
                        "2": "2",
                        "3": "3",
                        "4": "4",
                        "5": "5",
                        "6": "6",
                        "7": "7",
                        "8": "8",
                        "9": "9",
                        "10": "10",
                        "11": "11",
                        "12": "12",
                        "first": "-9999",
                        "last": "9999",
                        "none": "0"
                    },
                    "outline": {
                        "none": [
                            "2px solid transparent",
                            "2px"
                        ],
                        "white": [
                            "2px dotted white",
                            "2px"
                        ],
                        "black": [
                            "2px dotted black",
                            "2px"
                        ]
                    },
                    "padding": theme => theme('spacing'),
                    "placeholderColor": theme => theme('colors'),
                    "placeholderOpacity": (theme) => theme('opacity'),
                    "ringColor": (theme) => ({
          DEFAULT: theme('colors.blue.500', '#3b82f6'),
          ...theme('colors'),
        }),
                    "ringOffsetColor": (theme) => theme('colors'),
                    "ringOffsetWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px"
                    },
                    "ringOpacity": (theme) => ({
          DEFAULT: '0.5',
          ...theme('opacity'),
        }),
                    "ringWidth": {
                        "0": "0px",
                        "1": "1px",
                        "2": "2px",
                        "4": "4px",
                        "8": "8px",
                        "DEFAULT": "3px"
                    },
                    "rotate": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "45": "45deg",
                        "90": "90deg",
                        "180": "180deg",
                        "-180": "-180deg",
                        "-90": "-90deg",
                        "-45": "-45deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "saturate": {
                        "0": "0",
                        "50": ".5",
                        "100": "1",
                        "150": "1.5",
                        "200": "2"
                    },
                    "scale": {
                        "0": "0",
                        "50": ".5",
                        "75": ".75",
                        "90": ".9",
                        "95": ".95",
                        "100": "1",
                        "105": "1.05",
                        "110": "1.1",
                        "125": "1.25",
                        "150": "1.5"
                    },
                    "sepia": {
                        "0": "0",
                        "DEFAULT": "100%"
                    },
                    "skew": {
                        "0": "0deg",
                        "1": "1deg",
                        "2": "2deg",
                        "3": "3deg",
                        "6": "6deg",
                        "12": "12deg",
                        "-12": "-12deg",
                        "-6": "-6deg",
                        "-3": "-3deg",
                        "-2": "-2deg",
                        "-1": "-1deg"
                    },
                    "space": (theme, { negative }) => ({
          ...theme('spacing'),
          ...negative(theme('spacing')),
        }),
                    "stroke": {
                        "current": "currentColor"
                    },
                    "textColor": theme => ({
            ...theme('colors'),
            body: '#111827',
        }),
                    "textOpacity": (theme) => theme('opacity'),
                    "transformOrigin": {
                        "center": "center",
                        "top": "top",
                        "top-right": "top right",
                        "right": "right",
                        "bottom-right": "bottom right",
                        "bottom": "bottom",
                        "bottom-left": "bottom left",
                        "left": "left",
                        "top-left": "top left"
                    },
                    "transitionDelay": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms"
                    },
                    "transitionDuration": {
                        "75": "75ms",
                        "100": "100ms",
                        "150": "150ms",
                        "200": "200ms",
                        "300": "300ms",
                        "500": "500ms",
                        "700": "700ms",
                        "1000": "1000ms",
                        "DEFAULT": "150ms"
                    },
                    "transitionProperty": {
                        "none": "none",
                        "all": "all",
                        "DEFAULT": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        "colors": "background-color, border-color, color, fill, stroke",
                        "opacity": "opacity",
                        "shadow": "box-shadow",
                        "transform": "transform"
                    },
                    "transitionTimingFunction": {
                        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "linear": "linear",
                        "in": "cubic-bezier(0.4, 0, 1, 1)",
                        "out": "cubic-bezier(0, 0, 0.2, 1)",
                        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
                    },
                    "translate": (theme, { negative }) => ({
          ...theme('spacing'),
          ...negative(theme('spacing')),
          '1\/2': '50%',
          '1\/3': '33.333333%',
          '2\/3': '66.666667%',
          '1\/4': '25%',
          '2\/4': '50%',
          '3\/4': '75%',
          full: '100%',
          '-1\/2': '-50%',
          '-1\/3': '-33.333333%',
          '-2\/3': '-66.666667%',
          '-1\/4': '-25%',
          '-2\/4': '-50%',
          '-3\/4': '-75%',
          '-full': '-100%',
        }),
                    "width": theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1\/2': '50%',
            '1\/3': '33.333333%',
            '2\/3': '66.666667%',
            '1\/4': '25%',
            '2\/4': '50%',
            '3\/4': '75%',
            '1\/5': '20%',
            '2\/5': '40%',
            '3\/5': '60%',
            '4\/5': '80%',
            '1\/6': '16.666667%',
            '2\/6': '33.333333%',
            '3\/6': '50%',
            '4\/6': '66.666667%',
            '5\/6': '83.333333%',
            '1\/12': '8.333333%',
            '2\/12': '16.666667%',
            '3\/12': '25%',
            '4\/12': '33.333333%',
            '5\/12': '41.666667%',
            '6\/12': '50%',
            '7\/12': '58.333333%',
            '8\/12': '66.666667%',
            '9\/12': '75%',
            '10\/12': '83.333333%',
            '11\/12': '91.666667%',
            full: '100%',
            screen: '100vw',
        }),
                    "zIndex": {
                        "0": "0",
                        "10": "10",
                        "20": "20",
                        "30": "30",
                        "40": "40",
                        "50": "50",
                        "auto": "auto"
                    }
                }
            }
        }
    ],
    "theme": {
        "extend": []
    },
    "content": [
        ".\/src\/pug\/*.pug",
        ".\/src\/html\/*.html",
        ".\/src\/pages\/*.js",
        ".\/src\/components\/*\/*.js"
    ]
};