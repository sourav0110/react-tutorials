import { createTheme } from "@mui/material"
import { purple } from "@mui/material/colors";
const useTheme = () =>{
    const theme = createTheme({
        palette:{
            primary: purple
        },
        components:{
            MuiButton:{
                defaultProps:{
                    variant:"outlined"
                }
            }
        }

    })
    return theme;

};

export {useTheme}