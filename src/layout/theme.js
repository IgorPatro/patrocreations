const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1200,
  bigDesktop: 1439,
  huge: 1700,
}

const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
  },
  fontFamily: {
    JetBrainsMono: "'JetBrains Mono', monospace",
    Poppins: "'Poppins', sans-serif",
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  mediaQueries: {
    phone: `(min-width: ${breakpoints.phone}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px)`,
    bigTablet: `(min-width: ${breakpoints.bigTablet}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
    bigDesktop: `(min-width: ${breakpoints.bigDesktop}px)`,
    huge: `(min-width: ${breakpoints.huge}px)`,
  },
}

export default theme
