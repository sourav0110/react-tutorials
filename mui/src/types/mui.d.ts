import type { Palette } from "@mui/icons-material";
import "@mui/material"
declare module "@mui/material/Button"{
    interface ButtonPropsVariantOverrides{
        dashed: true;
    }
    interface ButtonPropsColorOverrides {
        custom: true
    }
}

declare module "@mui/material/styles"{
    interface Palette{
        custom: Palette["primary"]
    }
    interface PaletteOptions{
        custom?: PaletteOptions["primary"]
    }
}

// declare module "@mui/material/styles"{
//     interface BreakpointOverrides{
//         xs:false;
//         sm: false;
//         md: false;
//         lg: false;
//         xl: false;
//         mobile: true;
//         tablet: true;
//         laptop: true;
//         desktop: true;
//     }
// }