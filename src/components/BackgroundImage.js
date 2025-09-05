import { Box } from '@mui/material';

export default function BackgroundImage({ children }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        backgroundImage: 'url(/assets/zEMvwO.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Hafif yarı saydam katman */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255,255,255,0.2)', // daha hafif yap
          zIndex: 1,
        }}
      />

      {/* İçerik */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>{children}</Box>
    </Box>
  );
}
