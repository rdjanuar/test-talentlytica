import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Select,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { usePenilaian } from "./usePenilaian";

import { useState, Fragment } from "react";

function App() {
  const { state, handlePenilaian } = usePenilaian();

  const [result, setResult] = useState({});

  return (
    <Container maxW="container.xl">
      <Center flexDir="column" my={4}>
        <Heading>Aplikasi Penilaian Mahasiswa</Heading>
        <SimpleGrid my={4} w="61%" ml={32} alignItems="center" columns={4}>
          <Heading fontSize="16px">Aspek penilaian 1</Heading>
          <Heading pl={2} fontSize="16px">
            Aspek penilaian 2
          </Heading>
          <Heading pl={2} fontSize="16px">
            Aspek penilaian 3
          </Heading>
          <Heading pl={2} fontSize="16px">
            Aspek penilaian 4
          </Heading>
        </SimpleGrid>
        {Array.from({ length: 10 }).map((_, i) => (
          <Fragment key={i}>
            <Box
              bg="white"
              rounded="5px"
              borderColor="gray.500"
              borderWidth={1}
              h={14}
              my={2}
              display="flex"
              alignItems="center"
              position="relative"
              gap={4}
              px={4}
              w="70%"
            >
              <Text whiteSpace="nowrap">Mahasiswa {i + 1}</Text>
              {Array.from({ length: 4 }).map((_, idx) => (
                <Select
                  key={idx}
                  onChange={(e) => handlePenilaian(e, idx + 1, i + 1)}
                  placeholder="Select option"
                >
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </Select>
              ))}
            </Box>
          </Fragment>
        ))}
        <HStack justify="end">
          <Button onClick={() => setResult(state)} colorScheme="green">
            Simpan
          </Button>
        </HStack>
      </Center>
      {Object.values(result).length > 1 && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </Container>
  );
}

export default App;
