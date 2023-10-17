import { Box, Button, Typography } from "@mui/material";

import description from "/img/description.png";

export function Description({ onChangePage }: { onChangePage: () => void }) {
  return (
    <>
      <Box
        sx={(theme) => ({
          display: "flex",
          width: "100vw",
          backgroundColor: "#402109",
          [theme.breakpoints.down("lg")]: {
            paddingTop: "40px",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            [theme.breakpoints.up("md")]: {
              flexDirection: "column",
              marginLeft: "60px",
              marginRight: "60px",
              justifyContent: "center",
              alignItems: "center",
            },
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
              height: "100vh",
              overflowY: "scroll",
              marginLeft: "10px",
              marginRight: "20px",
              //   justifyContent: "center",
              alignItems: "center",
            },
            width: "100vw",
          })}
        >
          <Typography
            sx={(theme) => ({
              fontSize: "30px",
              textAlign: "left",
              paddingTop: "30px",
              [theme.breakpoints.down("lg")]: {
                textAlign: "center",
                fontSize: "15px",
              },
            })}
          >
            A inadimplência é um problema constante na vida do gestor
            educacional, e muitas vezes parece não haver solução.
            <br />
            <br />
            Neste contexto diversas soluções milagrosas como para garantir uma
            “inadimplência 0” surgem como a solução definitiva para as
            instituições educacionais.
            <br />
            <br />
            Mas será que realmente são soluções definitivas?
          </Typography>
          <Button
            sx={(theme) => ({
              marginTop: "60px",
              fontSize: "24px",
              fontWeight: "500",
              [theme.breakpoints.down("lg")]: {
                fontSize: "14px",
                minWidth: "200px",
              },
              padding: "20px",
              backgroundColor: "#8824FC",
            })}
            onClick={onChangePage}
            variant="contained"
          >
            ME MOSTRE!
          </Button>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
          })}
        >
          <img
            src={description}
            style={{ height: "100vh", objectFit: "contain" }}
          />
        </Box>
      </Box>
    </>
  );
}
