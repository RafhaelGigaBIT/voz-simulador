import { Box, Button, Typography } from "@mui/material";

import bg1 from "/img/bg1.png";

export function Home({ onChangePage }: { onChangePage: () => void }) {
  return (
    <>
      <Box
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            display: "flex",
            width: "100vw",
            flexDirection: "row",
          },
        })}
      >
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
          })}
        >
          <img src={bg1} style={{ height: "100vh", objectFit: "contain" }} />
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            flexWrap: "wrap",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.up("md")]: {
              flexDirection: "column",
              marginLeft: "100px",
              marginRight: "100px",
            },
            [theme.breakpoints.down("lg")]: {
              flexDirection: "column",
              marginTop: "30px",
              height: "100vh",
            },
          })}
        >
          <Typography
            sx={(theme) => ({
              fontWeight: "500",
              [theme.breakpoints.down("lg")]: {
                textAlign: "center",
                fontSize: "28px",
              },
              [theme.breakpoints.up("md")]: {
                textAlign: "left",
                fontSize: "62px",
                marginLeft: "12px",
                marginRight: "12px",
              },
              color: "#fff",
            })}
          >
            Como lidar com a inadimplência?
          </Typography>
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.down("lg")]: {
                textAlign: "center",
                fontSize: "20px",
                marginTop: "40px",
              },
              [theme.breakpoints.up("md")]: {
                textAlign: "left",
                fontSize: "30px",
                marginLeft: "12px",
                marginTop: "30px",
                marginRight: "12px",
              },
              paddingInline: "5px",
              color: "#fff",
            })}
          >
            Você sabe o quanto a inadimplência está custando para sua
            instituição? Será que as soluções milagrosas oferecidas hoje
            realmente resolvem o seu problema?
          </Typography>
          <Button
            sx={(theme) => ({
              marginTop: "60px",
              padding: "20px",
              backgroundColor: "#8824FC",
              color: "#fff",
              [theme.breakpoints.up("md")]: {
                fontSize: "24px",
                fontWeight: "500",
                minWidth: "400px",
              },
              [theme.breakpoints.down("lg")]: {
                fontSize: "16px",
                fontWeight: "500",
                minWidth: "200px",
              },
            })}
            onClick={onChangePage}
            variant="contained"
          >
            EU QUERO SABER MAIS
          </Button>
        </Box>
      </Box>
    </>
  );
}
