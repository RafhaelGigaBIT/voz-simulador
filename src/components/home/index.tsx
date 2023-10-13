import { Box, Button } from "@mui/material";
import { Typography } from '@mui/material';

import bg1 from '/img/bg1.png'

export function Home({ onChangePage }: { onChangePage: () => void }) {
    return(
        <>
            <Box sx={{ display: 'flex', width: '100vw' }} >
                <Box>
                    <img src={bg1} style={{ height: '100vh', objectFit: 'contain' }} />
                </Box>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '100vw',
                    marginLeft: '60px',
                    marginRight: '60px'
                }}>
                    <Typography sx={{ fontSize: '72px', fontWeight: '500', textAlign: 'left' }}>Como lidar com a inadimplência?</Typography>
                    <Typography sx={{ fontSize: '30px', textAlign: 'left', marginTop: '30px' }}>
                        Você sabe o quanto a inadimplência está custando para sua instituição? Será que as soluções milagrosas oferecidas hoje realmente resolvem o seu problema?
                    </Typography>
                    <Button 
                        sx={{ 
                            marginTop: '60px', 
                            fontSize: '24px',
                            fontWeight: '500',
                            minWidth: '400px',
                            padding: '20px',
                            backgroundColor: '#8824FC'
                        }} 
                        onClick={onChangePage} 
                        variant="contained"
                    >
                        EU QUERO SABER MAIS
                    </Button>
                </Box>
            </Box>
        </>
    )
}