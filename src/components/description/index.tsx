import { Box, Button } from "@mui/material";
import { Typography } from '@mui/material';

import description from '/img/description.png'

export function Description({ onChangePage }: { onChangePage: () => void }) {
    return(
        <>
            <Box sx={{ display: 'flex', width: '100vw', backgroundColor: '#402109' }}>               
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '100vw',
                    marginLeft: '60px',
                    marginRight: '60px'
                }}>
                    <Typography sx={{ fontSize: '30px', textAlign: 'left', marginTop: '30px' }}>
                        A inadimplência é um problema constante na vida do gestor educacional, e muitas vezes parece não haver solução.
                        <br />
                        <br />
                        Neste contexto diversas soluções milagrosas como para garantir uma “inadimplência 0” surgem como a solução definitiva para as instituições educacionais.
                        <br />
                        <br />
                        Mas será que realmente são soluções definitivas?
                    </Typography>
                    <Button 
                        sx={{ 
                            marginTop: '60px', 
                            fontSize: '24px',
                            fontWeight: '500',
                            padding: '20px',
                            minWidth: '400px',
                            backgroundColor: '#8824FC'
                        }} 
                        onClick={onChangePage} 
                        variant="contained"
                    >
                        ME MOSTRE!
                    </Button>
                </Box>
                <Box>
                    <img src={description} style={{ height: '100vh', objectFit: 'contain' }} />
                </Box>
            </Box>
        </>
    )
}