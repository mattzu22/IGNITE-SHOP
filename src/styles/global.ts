import { globalCss } from ".";

export const globalStyles = globalCss({
    '*':{
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        fontFamily: 'roboto',
    },

    body: {
        backgroundColor: '$gray900',
        color: '$gray100'
    }
})