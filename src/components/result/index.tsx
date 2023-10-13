import { Box, Button } from "@mui/material";
import { Typography } from '@mui/material';
import { ICalcData } from "../../interfaces";
import { DataCard } from "../data-card";

export function Result({ data, onChangePage, onBack }: { data: ICalcData, onChangePage: () => any, onBack: () => any }) {
    return(
        <>
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column', 
                width: '100vw', 
                height: '100vh', 
                backgroundColor: '#fff',
                alignItems: 'center'
            }}>
                <Typography sx={{ 
                    fontSize: '60px', 
                    fontWeight: '500', 
                    color: 'black', 
                    padding: '30px',
                    textAlign: 'center'
                }}>
                    Olha só o quanto você pode estar perdendo...
                </Typography>
                <Box sx={{ display: 'flex', gap: '40px' }}>
                    <DataCard data={data} label="Atualmente" borderColor="#FF0000" isPrejudice fixedInad={parseFloat(data.inadMedia)} />
                    <DataCard data={data} label='Com "inadimplência 0"' costTax isPrejudice />
                    <DataCard data={data} label="Com a VOZ" backgroundColor="#FF8424" fixedInad={5} />
                </Box>
                <Box sx={{ display: 'flex', marginTop: '60px', gap: '15px', alignItems: 'center' }}>
                    <Button 
                        sx={{  
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '15px',
                            maxHeight: '60%'
                        }} 
                        onClick={onBack} 
                        variant="outlined"
                    >
                        Voltar
                    </Button>
                    <Button 
                        sx={{ 
                            fontSize: '24px',
                            fontWeight: '500',
                            minWidth: '500px',
                            padding: '20px',
                            backgroundColor: '#FF8424'
                        }} 
                        onClick={onChangePage} 
                        variant="contained"
                    >
                        CONTINUAR
                    </Button>
                </Box>                
            </Box>
        </>
    )
}