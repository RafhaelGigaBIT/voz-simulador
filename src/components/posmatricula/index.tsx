import { Box, Button, Typography } from "@mui/material";
import { ICalcData } from "../../interfaces";
import { DataCard } from "../data-card";

export function PosMatricula({
  data,
  onBack,
}: {
  data: ICalcData;
  onBack: () => any;
}) {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#fff",
          alignItems: "center",
          [theme.breakpoints.down("lg")]: {
            overflowY: "scroll",
            paddingTop: "30px",
          },
        })}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontWeight: "500",
            color: "black",
            padding: "30px",
            textAlign: "center",
          }}
        >
          E no pós-matricula...
        </Typography>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <DataCard
            data={data}
            label="Atualmente"
            borderColor="#FF0000"
            isPrejudice
            posMatricula
            fixedInad={parseFloat(data.inadPosMatricula)}
          />
          <DataCard
            data={data}
            label='Com "inadimplência 0"'
            costTax
            isPrejudice
            posMatricula
          />
          <DataCard
            data={data}
            label="Com a VOZ"
            backgroundColor="#FF8424"
            posMatricula
            fixedInad={1}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "60px",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              padding: "15px",
              maxHeight: "60%",
            }}
            onClick={onBack}
            variant="outlined"
          >
            Voltar
          </Button>
          <Button
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              minWidth: "500px",
              padding: "20px",
              backgroundColor: "#FF8424",
            }}
            onClick={() =>
              (window.location.href = "https://www.vozeduca.com.br")
            }
            variant="contained"
          >
            QUERO DIMINUIR MINHA INADIMPLÊNCIA
          </Button>
        </Box>
      </Box>
    </>
  );
}
