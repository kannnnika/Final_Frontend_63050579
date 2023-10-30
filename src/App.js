import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  return (
    <Box position="relative">
      {/* <Header /> */}
      <Container>
        <List />
      </Container>
    </Box>
  );
};

export default App;
