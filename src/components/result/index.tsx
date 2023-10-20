import { Box, Button, Typography } from "@mui/material";
import { ICalcData } from "../../interfaces";
import { DataCard } from "../data-card";

export function Result({
  data,
  onChangePage,
  onBack,
}: {
  data: ICalcData;
  onChangePage: () => any;
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
          sx={(theme) => ({
            fontSize: "60px",
            [theme.breakpoints.down("lg")]: {
              fontSize: "20px",
            },
            fontWeight: "500",
            color: "black",
            padding: "30px",
            textAlign: "center",
          })}
        >
          Olha só o quanto você pode estar perdendo...
        </Typography>
        <Box
          sx={(theme) => ({
            display: "flex",
            gap: "40px",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
            },
          })}
        >
          <DataCard
            data={data}
            label="Atualmente"
            borderColor="#FF0000"
            isPrejudice
            fixedInad={parseFloat(data.inadMedia)}
          />
          <DataCard
            data={data}
            label='Com "inadimplência 0"'
            costTax
            isPrejudice
          />
          <DataCard
            data={data}
            label="Com a VOZ"
            backgroundColor="#FF8424"
            fixedInad={5}
          />
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            marginTop: "60px",
            marginBottom: "50px",
            gap: "15px",
            [theme.breakpoints.down("lg")]: {
              flexDirection: "row",
            },
            alignItems: "center",
          })}
        >
          <Button
            sx={(theme) => ({
              fontSize: "16px",
              fontWeight: "500",
              padding: "15px",
              maxHeight: "60%",
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                padding: "5px",
              },
            })}
            onClick={onBack}
            variant="outlined"
          >
            Voltar
          </Button>
          <Button
            sx={(theme) => ({
              fontSize: "24px",
              fontWeight: "500",
              minWidth: "500px",
              padding: "20px",
              backgroundColor: "#FF8424",
              [theme.breakpoints.down("lg")]: {
                flexDirection: "column",
                fontSize: "18px",
                minWidth: "200px",
                padding: "5px",
              },
            })}
            onClick={onChangePage}
            variant="contained"
          >
            CONTINUAR
          </Button>
        </Box>
      </Box>
    </>
  );
}
