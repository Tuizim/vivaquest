import { Stack, Text } from "@chakra-ui/react";
import { useProfileHistory } from "../../hooks/useProfileHistory";
import { HistoryEntry } from "./HistoryEntry";
import { InfoCard } from "../layout/InfoCard";

export function ProfileHistory() {
  const history = useProfileHistory();

  return (
    <InfoCard>
      <Text color="secondary.400" fontWeight="medium" fontSize={{ base: "xs", md: "sm" }} mb={4}>
        Histórico
      </Text>

      {history.length === 0 ? (
        <Text fontSize="sm" color="secondary.400" textAlign="center" py={4}>
          Nenhum registro ainda
        </Text>
      ) : (
        <Stack gap={{ base: 4, md: 5 }}>
          {history.map((entry) => (
            <HistoryEntry key={entry.date} entry={entry} />
          ))}
        </Stack>
      )}
    </InfoCard>
  );
}
