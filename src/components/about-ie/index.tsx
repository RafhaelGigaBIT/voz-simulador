import { Box, Button, FormControl, InputAdornment, OutlinedInput, Tooltip } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';

import about from '/img/about.svg'
import { useState } from "react";
import { ICalcData } from "../../interfaces";

export function AboutIE({ onChangePage }: { onChangePage: (calcData: ICalcData) => void }) {
    const [alunos, setAlunos] = useState<string>();
    const [ticketMedio, setTicketMedio] = useState<string>();
    const [inadMedia, setInadMedia] = useState<string>();
    const [inadPosMatricula, setInadPosMatricula] = useState<string>();
    const [error, setError] = useState(false);

    const handleCompletePage = () => {
        if (alunos && ticketMedio && inadMedia && inadPosMatricula) {
            setError(false);
            onChangePage({
                alunos: alunos!,
                ticketMedio: ticketMedio!,
                inadMedia: inadMedia!,
                inadPosMatricula: inadPosMatricula!
            })
        } else {
            setError(true);
        }
    }

    return(
        <>
            <Box sx={{ display: 'flex', width: '100vw', backgroundColor: '#fff' }}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start',
                    marginTop: '40px', 
                    alignItems: 'start', 
                    width: '100vw',
                    marginLeft: '60px',
                    marginRight: '60px'
                }}>
                    <Typography sx={{ fontSize: {xs: '2em', sm: '2em', md: '2em', lg: '3em', xl: '4em'}, fontWeight: '500', textAlign: 'center', color: 'black' }}>Fale um pouco sobre a sua instituição...</Typography>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '30px', 
                        marginTop: '30px', 
                        alignItems: 'start', 
                        width: '100%' 
                    }}>
                        <Box>
                            <Typography sx={{ fontSize: '16px', color: '#344054', fontWeight: '500', textAlign: 'start' }}>Quantos alunos você tem?</Typography>
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder="5"
                                    type="number"
                                    endAdornment={<InputAdornment position="end"><Tooltip title="Qual a quantidade total dos alunos da sua instituição?"><HelpOutlineIcon /></Tooltip></InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    value={alunos}
                                    onChange={(event) => setAlunos(event.target.value)}
                                    sx={{ minWidth: '400px' }}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '16px', color: '#344054', fontWeight: '500', textAlign: 'start' }}>Qual seu ticket médio?</Typography>
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder="800,00"
                                    type="number"
                                    endAdornment={<InputAdornment position="end"><Tooltip title="Qual é o valor médio das mensalidades do seus alunos?"><HelpOutlineIcon /></Tooltip></InputAdornment>}
                                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                    'aria-label': 'weight',
                                    }}
                                    value={ticketMedio}
                                    onChange={(event) => setTicketMedio(event.target.value)}
                                    sx={{ minWidth: '400px' }}
                                />
                            </FormControl>
                        </Box>                        
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ fontSize: '16px', color: '#344054', fontWeight: '500', textAlign: 'start' }}>Qual sua inadimplência acumulada até o fim do periodo?</Typography>
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder="30%"
                                    type="number"
                                    endAdornment={<InputAdornment position="end"><Tooltip title="Qual é seu percentual de inadimplência antes do período de matrículas?"><HelpOutlineIcon /></Tooltip></InputAdornment>}
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    value={inadMedia}
                                    onChange={(event) => setInadMedia(event.target.value)}
                                    sx={{ minWidth: '400px' }}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography sx={{ fontSize: '16px', color: '#344054', fontWeight: '500', textAlign: 'start' }}>Qual sua inadimplência acumulada pós-matricula?</Typography>
                            <FormControl variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder="30%"
                                    type="number"
                                    endAdornment={<InputAdornment position="end"><Tooltip title="Após o período de matriculas, qual é seu percentual de inadimplência"><HelpOutlineIcon /></Tooltip></InputAdornment>}
                                    startAdornment={<InputAdornment position="start">%</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    value={inadPosMatricula}
                                    onChange={(event) => setInadPosMatricula(event.target.value)}
                                    sx={{ minWidth: '400px' }}
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    {error ? <Typography sx={{ fontSize: '20px', color: 'red', marginTop: '5px' }}>Preencha todos os campos!</Typography> : null}
                    <Button 
                        sx={{ 
                            marginTop: '60px', 
                            fontSize: '24px',
                            fontWeight: '500',
                            minWidth: '400px',
                            padding: '20px',
                            backgroundColor: '#FF8424'
                        }} 
                        onClick={handleCompletePage} 
                        variant="contained"
                    >
                        VAMOS SIMULAR
                    </Button>
                </Box>
                <Box sx={{ backgroundColor: '#FF8424' }}>
                    <img src={about} style={{ height: '100vh', width: '50vw', objectFit: 'contain' }} />
                </Box>
            </Box>
        </>
    )
}