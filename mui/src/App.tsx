// import {
//   Button,
//   CssBaseline,
//   TextField,
//   Slider,
//   Stack,
//   Container,
//   styled,
//   type SliderProps,
//   createTheme,
//   ThemeProvider,
//   Typography,
//   RadioGroup,
//   Radio,
//   FormControlLabel,
//   useColorScheme,
//   alpha,
//   Grid,
  

// } from "@mui/material";
// import { useState } from "react";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import { red, blue, lime} from "@mui/material/colors";

// type CustomSliderProps = SliderProps &{
//   error?:boolean;
// }

// // const CustomSlider = styled(Slider)<SliderProps>(({theme}) =>({
// //   width: theme.spacing(10),
// //   color: theme.palette.error.main,
// //   "& .MuiSlider-thumb":{
// //     "&:hover, &.Mui-focusVisible":{
// //       backgroundColor: 'green'
// //     }
// //   }

// // }))

// const CustomSlider = styled(Slider, {shouldForwardProp: (prop) => prop !="error",})<CustomSliderProps>(({theme, error}) =>({
//   width: theme.spacing(10),
//   color: theme.palette.error.main,
//   "& .MuiSlider-thumb":{
//     "&:hover, &.Mui-focusVisible":{
//       backgroundColor: error ? 'red' : 'green'
//     }
//   }

// }))


// function ThemeToggle(){
//   const {mode, setMode} = useColorScheme()
//   if (!mode) return null;
//   return (
//     <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as 'system' | 'light'| 'dark')}>
//       <FormControlLabel control={<Radio/>} value="system" label="System"/>
//       <FormControlLabel control={<Radio/>} value="light" label="Light"/>
//       <FormControlLabel control={<Radio/>} value="dark" label="Dark"/>

//     </RadioGroup>
//   )
// }

// const theme = createTheme({
//   // breakpoints:{
//   //   values:{
//   //     mobile:0,
//   //     tablet:640,
//   //     laptop:1024
//   //   }
//   // }
//   colorSchemes:{
//     dark:{
//       palette:{
//         primary:{
//           main: "#543345"
//         }
//       }
//     },
//     light:{
//       palette:{
//         primary:{
//           main: alpha('#ff0000', 0.5)
//         },
//         custom: {
//           main: lime[500]
//         }
//       }
//     }

//   },
//   typography:{
//     fontFamily: "Poppins"
//   },
//   components:{
//     MuiButton:{
//       defaultProps:{
//         disableRipple: true,
//         variant: "contained"
//       },
//       styleOverrides:{
//         root:{
//           fontSize:"2rem",
//           variants:[
//             {
//               props:{
//                 variant:"outlined",
//                 color: "secondary"
//               },
//               style:{
//                 fontSize:".5rem"
//               }

//             },
//             {
//               props: {variant: "dashed"},
//               style:{border: `4px dashed ${red[500]}`}
//             },{
//               props: (props) => {
//                 return props.variant === "dashed" && props.color !="secondary"
//               },
//               style:{
//                 border: `4px dashed ${blue[500]}`
//               }
//             }
//           ]
//         }
//       },
      
//     },
//     MuiCssBaseline:{
//         styleOverrides:(theme) => `
//         h1{
//           color: ${theme.palette.success.main}
//         }
//         `
//     }
//   }
// })



// // function App() {
// //   const [value, setValue] = useState("");
// //   return (
// //     <ThemeProvider theme={theme}>
// //     <Container maxWidth="md" sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
// //       <Stack gap={2}>
// //         <CssBaseline />
// //         <ThemeToggle/>

// //         <TextField
// //           value={value}
// //           onChange={(e) => setValue(e.target.value)}
// //           error={!value}
// //         />
// //         <Slider 
// //         disabled
// //         sx={{width:100, color:'success.main', ":hover":{"background":"yellow"} ,
// //         "&.Mui-disabled":{
// //           "& .MuiSlider-thumb":{
// //             backgroundColor:"success.main"
// //           }

// //         }
// //         // "& .MuiSlider-thumb":{background:"red", ":hover":{backgroundColor: "blue"}}
// //         }}/>
// //         <CustomSlider/>
// //         <Button
// //           endIcon={<AutoAwesomeIcon fontSize="small" color="error" />}
// //           variant="contained"
// //         >
// //           submit
// //         </Button>
// //         <Button variant="outlined" color="secondary">Test</Button>
// //         <Button variant="dashed">Test</Button>
// //         <Button variant="contained" color="custom">Lime</Button>
// //         <Typography variant="h1">H1</Typography>
// //         <Typography>H2</Typography>
// //       </Stack>
// //     </Container>
// //     </ThemeProvider>
// //   );
// // }


// function App(){
//   return (<>
//   <ThemeProvider theme={theme}>
//     <CssBaseline/>
//     <Container maxWidth='md'>
//     <Grid container spacing={2}>
//       <Grid size={{xs:3,  md:6, xl:4}}>
//         <Button fullWidth>1</Button>
//       </Grid>
//       <Grid size={{xs:4, md:6, xl:4}}>
//         <Button fullWidth>1</Button>
//       </Grid>
//       <Grid size="grow">
//         <Button fullWidth>1</Button>
//       </Grid>

//     </Grid>
//     </Container>


//   </ThemeProvider>


//   </>)
// }

import { Button } from "@mui/material";

function App(){
  
  return (<>
    <Button >1</Button>

  </>)
}



export default App;


