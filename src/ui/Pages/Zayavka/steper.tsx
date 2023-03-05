import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import DiscreteSliderMarks from "./selector";
import FormPropsTextFields from "./time";
import InputWithIcon from "./fio";

import BasicTabs from "./tech";
import s from "./tech.module.scss";
export default function VerticalLinearStepper(props: any) {
  const steps = [
    {
      label: "Выберите технику",
      description: <BasicTabs props={props} />,
    },
    {
      label: "Выберите время аренды",
      description: (
        <>
          <FormPropsTextFields />
          <DiscreteSliderMarks />
        </>
      ),
    },
    {
      label: "Заполните заявку",
      description: <InputWithIcon />,
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box className={s.box}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Отправить" : "Продолжить"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Назад
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Заявка отправлена</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Редактировать
          </Button>
        </Paper>
      )}
    </Box>
  );
}
