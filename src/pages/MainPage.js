import { AppBar, Box, Paper, Toolbar, Typography } from '@mui/material';

function MainPage() {
  return (
    <>
      <Box>
        <AppBar sx={{ backgroundColor: '#2196f3' }}>
          <Toolbar>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              }}
            >
              Flight Planner
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        sx={{
          mt: { xs: 4, sm: 6, md: 8, lg: 10 },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: 'calc(100vh - 64px)',
          backgroundColor: '#ffffffff',
          border: '3px solid yellow',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 4,
            width: { xs: '90%', sm: '50%', md: '40%', lg: '30%', xl: '25%' }, // ekran boyutuna göre
            minWidth: 300, // çok küçülmesin
            height: 'auto', // içerik kadar büyür
            maxHeight: '80vh', // ama ekranın %80'inden büyük olamaz
            minHeight: 300,
            backgroundColor: '#4ea7f0ff',
            border: '3px solid red',
          }}
        ></Paper>
      </Box>
    </>
  );
}

export default MainPage;
