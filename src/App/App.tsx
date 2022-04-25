import * as React from "react"
import {Box, ChakraProvider, theme,} from "@chakra-ui/react"
import {ColorModeSwitcher} from "../ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <h1>Battleship!</h1>
      <ColorModeSwitcher />
    </Box>
  </ChakraProvider>
)
