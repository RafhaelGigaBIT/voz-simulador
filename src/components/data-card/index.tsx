import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ICalcData } from "../../interfaces";

export function DataCard({
  label,
  borderColor,
  isPrejudice = false,
  backgroundColor = "#EAECF0",
  costTax = false,
  data,
  fixedInad,
  posMatricula = false,
}: {
  label: string;
  borderColor?: string;
  isPrejudice?: boolean;
  backgroundColor?: string;
  costTax?: boolean;
  data: ICalcData;
  fixedInad?: number;
  posMatricula?: boolean;
}) {
  const fontColor = backgroundColor === "#EAECF0" ? "black" : "white";
  const [inadPercent, setInadPercent] = useState(10);

  const displayCurrency = (total: number) => {
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: backgroundColor,
          borderRadius: "15px",
          borderColor: borderColor ? borderColor : null,
          borderWidth: borderColor ? "2px" : null,
          borderStyle: borderColor ? "solid" : null,
          gap: "21px",
          padding: "40px",
          [theme.breakpoints.down("lg")]: {
            gap: "10px",
            padding: "18px",
          },
        })}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            color: fontColor,
          }}
        >
          {label}
        </Typography>
        <Box>
          <Typography
            sx={(theme) => ({
              fontSize: "16px",
              [theme.breakpoints.down("lg")]: {
                fontSize: "16px",
              },
              color: fontColor,
              fontWeight: "600",
              textAlign: "start",
            })}
          >
            Receita prevista
          </Typography>
          <FormControl variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={displayCurrency(
                parseFloat(data.alunos) * parseFloat(data.ticketMedio) * 12
              )}
              disabled
              sx={(theme) => ({
                [theme.breakpoints.down("lg")]: {
                  minWidth: "150px",
                  width: "100%",
                },
                minWidth: "400px",
                "& .MuiInputBase-input.Mui-disabled": {
                  background: "white",
                  color: "black !important",
                  WebkitTextFillColor: "black",
                },
              })}
            />
          </FormControl>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: fontColor,
              fontWeight: "600",
              textAlign: "start",
            }}
          >
            {costTax ? "% Taxa de custo" : "% Inadimplência"}
          </Typography>
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <OutlinedInput
              id="outlined-adornment-weight"
              type="number"
              aria-describedby="outlined-weight-helper-text"
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
              inputProps={{
                "aria-label": "weight",
              }}
              value={fixedInad ? fixedInad : inadPercent}
              onChange={(event) =>
                setInadPercent(parseFloat(event.target.value))
              }
              disabled={!costTax}
              sx={(theme) => ({
                backgroundColor: "white",
                minWidth: 400,
                [theme.breakpoints.down("lg")]: {
                  width: "100%",
                  minWidth: 150,
                },
              })}
              // sx={{
              //     backgroundColor: 'white',
              //     "& .MuiInputBase-input.Mui-disabled": {
              //         background: "white",
              //         WebkitTextFillColor: "black"
              //     }
              // }}
            />
          </FormControl>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: fontColor,
              fontWeight: "600",
              textAlign: "start",
            }}
          >
            Prejuízo {posMatricula ? "Pós-matricula" : null}
          </Typography>
          <FormControl variant="outlined" error={isPrejudice}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={displayCurrency(
                parseFloat(data.alunos) *
                  parseFloat(data.ticketMedio) *
                  12 *
                  ((fixedInad ? fixedInad : inadPercent) / 100)
              )}
              disabled
              sx={(theme) => ({
                minWidth: "400px",
                [theme.breakpoints.down("lg")]: {
                  width: "100%",
                  minWidth: 150,
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  background: "white",
                  WebkitTextFillColor: "black",
                },
                borderStyle: isPrejudice ? "none none solid none" : null,
                borderWidth: "2px",
                borderColor: "#FF0000",
              })}
            />
          </FormControl>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              color: fontColor,
              fontWeight: "600",
              textAlign: "start",
            }}
          >
            Receita Recebida
          </Typography>
          <FormControl variant="outlined" error={isPrejudice}>
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              value={displayCurrency(
                parseFloat(data.alunos) *
                  parseFloat(data.ticketMedio) *
                  12 *
                  (1 - (fixedInad ? fixedInad : inadPercent) / 100)
              )}
              disabled
              sx={(theme) => ({
                minWidth: "400px",
                [theme.breakpoints.down("lg")]: {
                  width: "100%",
                  minWidth: 150,
                },
                "& .MuiInputBase-input.Mui-disabled": {
                  background: "white",
                  color: "black !important",
                  WebkitTextFillColor: "black",
                },
                borderStyle: isPrejudice ? "none none solid none" : null,
                borderWidth: "2px",
                borderColor: "#FF0000",
              })}
            />
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
