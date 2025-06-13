import { Grid } from "@/components/Grid/Grid";
import { Box } from "@/components/Box/Box";
import { Flex } from "@/components/Flex/Flex";
import "./App.css";
import { ExternalLink } from "@/components/ExternalLink/ExternalLink";

export type AppProps = {
  children?: React.ReactNode;
};

function App() {
  return (
    <Flex
      className=" min-h-screen flex justify-center items-center "
      direction="col"
      gap="gap-4"
    >
      <Grid cols="grid-cols-2" element="main" gap="gap-2">
        <Box className="bg-blue-500 p-4 rounded">Item 1</Box>
        <Box className="bg-green-500 p-4 rounded">Item 2</Box>
        <Box className="bg-red-500 p-4 rounded">Item 3</Box>
        <Box className="bg-yellow-500 p-4 rounded">Item 4</Box>
      </Grid>
      <ExternalLink href="https:www.google.com"> This is the link</ExternalLink>
    </Flex>
  );
}

export default App;
