import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Blog', 'About'];

function Main() {
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: 'rgb(225 165 163)', paddingBottom: '50px' }}
    >
      {/* ANCHOR Header */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AdbIcon
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                mr: 1,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                mr: 2,
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '0.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
          >
            {pages.map((val, idx) => (
              <Button
                key={`${val}-${idx}`}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                }}
              >
                {val}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Main;
