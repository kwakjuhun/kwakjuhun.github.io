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
    titleColor : '#F5EAEA',
    bgColor: '#4D4D4D',
    color: '#000000',
}

const light ={
    titleColor : '#4D4D4D',
    bgColor: '#F5EAEA',
    color: '#FFF',
}

export {
    widthSize,
    dark,
    light
}