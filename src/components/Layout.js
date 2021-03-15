import { Box, Grid } from '@chakra-ui/layout';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Grid h="100vh" templateRows="auto 1fr auto">
      <Navbar />
      <Box bgColor="#eeeeee">{children}</Box>
      <Footer />
    </Grid>
  );
};

export default Layout;
