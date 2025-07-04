"use client";
import { Box, ExternalLink, Flex, Grid } from "@/components";
import { Button } from "@/components/Button/button";
import "./App.css";
import "./global.css";

export type AppProps = {
  children?: React.ReactNode;
};

function App(): React.ReactElement {
  return (
    <Flex
      className="flex justify-center items-center min-h-screen"
      direction="col"
      gap="gap-4"
    >
      <Grid cols="grid-cols-2" element="main" gap="gap-2">
        <Box className="bg-blue-500 p-4 rounded">Item 1</Box>
        <Box className="bg-green-500 p-4 rounded">Item 2</Box>
        <Box className="bg-red-500 p-4 rounded">Item 3</Box>
        <Box className="bg-yellow-500 p-4 rounded">Item 4</Box>
        <Button className="bg-accent-foreground">title</Button>
      </Grid>
      <ExternalLink href="https:www.google.com"> This is the link</ExternalLink>
    </Flex>
  );
}

export default App;
