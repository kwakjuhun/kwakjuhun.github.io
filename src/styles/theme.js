const size = {
    mobile: "768px",
    tablet: "1024px",
    laptop: "1460px",
    desktop: "1700px",
};

const widthSize = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
}
    
const dark ={
    first: '#121212',
    second: '#181818',
    third: '#282828',
    fourd: '#404040',
    primaryText: '#FFFFFF',
    secondaryText: '#B3B3B3'
}

const light ={
    first: '#FFF',
    second: '#FFF',
    third: '#FFF',
    fourd: '#101010',
    primaryText: '#000',
    secondaryText: '#121212'
}

export {
    widthSize,
    dark,
    light
}