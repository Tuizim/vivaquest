import { Box, Stack, Text } from "@chakra-ui/react";
import { useProfileHistory } from "../../hooks/useProfileHistory";
import { HistoryEntry } from "./HistoryEntry";

export function ProfileHistory() {
  const history = useProfileHistory();

  return (
    <Box
      w="full"
      p={5}
      rounded="2xl"
      bg="white"
      border="1.5px solid"
      borderColor="secondary.200"
      boxShadow="0 2px 8px rgba(0,0,0,0.06)"
    >
      <Text color="secondary.400" fontWeight="medium" fontSize="sm" mb={4}>
        Histórico
      </Text>

      {history.length === 0 ? (
        <Text fontSize="sm" color="secondary.400" textAlign="center" py={4}>
          Nenhum registro ainda
        </Text>
      ) : (
        <Stack gap={4}>
          {history.map((entry) => (
            <HistoryEntry key={entry.date} entry={entry} />
          ))}
        </Stack>
      )}
    </Box>
  );
}
