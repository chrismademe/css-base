const rem = (px) => {
    return `${px / 16}rem`;
};

const colors = {
    grey: "#292D2F",
    "grey-700": "#51565A",
    "grey-500": "#969FA7",
    "grey-300": "#D0DAE3",
    "grey-100": "#E7EDF2",

    white: "white",
    black: "#1B1D1F",
    negative: "#D00D0A",
    positive: "#3BAD61",
    warning: "#D3D33B",
    neutral: "#1A2683",

    twitter: "#1da1f2",
    instagram: "#f56040",
    twitch: "#6441a5",
    codepen: "#ff3c41",
    github: "#6e5494",
};

const fonts = {
    base:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

const sizeScale = {
    "1": rem(4),
    "2": rem(8),
    "3": rem(16),
    "4": rem(24),
    "5": rem(36),
    "6": rem(48),
    "7": rem(64),
    "8": rem(80),
    "9": rem(96),
    "10": rem(128),
};

module.exports = {
    colors,
    sizeScale,
    fonts,
    generateCustomProperties: true,
    utilities: {
        bg: {
            items: colors,
            output: "standard",
            property: "background",
        },
        c: {
            items: colors,
            output: "standard",
            property: "color",
        },
        font: {
            items: fonts,
            output: "standard",
            property: "font-family",
        },
        mt: {
            items: sizeScale,
            output: "standard",
            property: "margin-top",
        },
        mb: {
            items: sizeScale,
            output: "standard",
            property: "margin-bottom",
        },
        leading: {
            items: {
                tight: "1.2",
                mid: "1.5",
                loose: "1.7",
            },
            output: "standard",
            property: "line-height",
        },
        mw: {
            items: {
                long: "75ch",
                short: "60ch",
                compact: "40ch",
            },
            output: "standard",
            property: "max-width",
        },
        p: {
            items: sizeScale,
            output: "responsive",
            property: "padding",
        },
        pt: {
            items: sizeScale,
            output: "standard",
            property: "padding-top",
        },
        pb: {
            items: sizeScale,
            output: "standard",
            property: "padding-bottom",
        },
        pl: {
            items: sizeScale,
            output: "standard",
            property: "padding-left",
        },
        text: {
            items: sizeScale,
            output: "responsive",
            property: "font-size",
        },
        weight: {
            items: {
                light: "300",
                regular: "400",
                mid: "600",
                bold: "700",
            },
            output: "standard",
            property: "font-weight",
        },
    },
    breakpoints: {
        md: "48em",
        lg: "68em",
    },
};
