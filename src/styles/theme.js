const size = {
    mobile: "770px",
    tableS: "1023px",
    tableM: "1220px",
    tableL: "1280px",
    laptop: "1460px",
    desktop: "1700px",
};

const theme = {
    mobile: `(max-width: ${size.mobile})`,
    tableS: `(max-width: ${size.tableS})`,
    tableM: `(max-width: ${size.tableM})`,
    tableL: `(max-width: ${size.tableL})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
}
    
export default theme;

export const dark ={
    colors:{
        titleColor : '#121212',
        bgColor: '#b8b8b8',
    }
}

export const light ={
    colors:{
        titleColor : '#b8b8b8',
        bgColor: '#121212',
    }
}