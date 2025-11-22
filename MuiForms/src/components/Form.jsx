import React from "react";
import { Container, Grid, Paper, Typography, Box} from "@mui/material";
import { useForm } from "react-hook-form";
import { TextInput } from "./index";
import { userSchema } from "../schema/validator";
import Selector from "./Selector";
import { Button } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import MultiCheckBox from "./MultiCheckBox";
import FormInputSlider from "./Slider";
import RadioInput from "./RadioInput";

function Form() {
  const formHandler = (data) => {
    console.log(data);
    navigate("/display", { state: data });
  };

  const defaultValues = {
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    checkedOptions: [],
    temp: 0,
    model: "",
  };

  const { handleSubmit, reset, control, setValue } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues,
  });

  const options = [
    {
      value: "Ind",
      label: "India",
    },
    {
      value: "US",
      label: "USA",
    },
  ];
  const checkoptions = [
    { label: "Option A", value: "a" },
    { label: "Option B", value: "b" },
    { label: "Option C", value: "c" },
  ];

  const radioOptions = [
    { label: "Model1", value: "Titan" },
    { label: "Model2", value: "SentenceTransformers" },
    { label: "Model3", value: "Gpt-4o" },
  ];
  const navigate = useNavigate();

  return (
    <div>
      <Container component="main" maxWidth="md" sx={{ mt: 8 }}>
        <Paper
          elevation={6}
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Center only the title */}
          <Typography
            component="h1"
            variant="h5"
            gutterBottom
            sx={{ alignSelf: "center" }}
          >
            Sign In
          </Typography>

          {/* All inputs go full width */}
          <Box sx={{ width: "100%", mt: 2 }}>
            <TextInput
              name="email"
              control={control}
              margin="normal"
              type="text"
              label="email"
            />

            <TextInput
              name="password"
              control={control}
              margin="normal"
              type="password"
              label="password"
            />

            <TextInput
              name="phoneNumber"
              control={control}
              margin="normal"
              type="text"
              label="phone number"
            />

            <Selector
              name="country"
              control={control}
              options={options}
              label="countries"
            />

            <MultiCheckBox
              name="checkedOptions"
              setValue={setValue}
              label="choose an option"
              control={control}
              options={checkoptions}
            />

            {/* The responsive Grid section */}
            <Grid container xs={12} spacing={10} sx={{ mt: 2 }}>
              <Grid item xs={6} >
                <FormInputSlider
                  name="temp"
                  setvalue={setValue}
                  label="Choose the temperature value"
                  control={control}
                />
              </Grid>

              <Grid item xs={6}>
                <RadioInput
                  name="model"
                  label="choose model"
                  control={control}
                  options={radioOptions}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Submit button aligned to the right */}
          <Button
            variant="contained"
            onClick={handleSubmit(formHandler)}
            sx={{ mt: 4, alignSelf: "end" }}
          >
            Submit
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Form;
