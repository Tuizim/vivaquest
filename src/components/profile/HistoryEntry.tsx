import { Box, Flex, Text } from "@chakra-ui/react";
import { format, isToday, isYesterday } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { HistoryEntry } from "../../hooks/useProfileHistory";
import { HistoryHabitChip } from "./HistoryHabitChip";

type HistoryEntryProps = {
  entry: HistoryEntry;
};

export function HistoryEntry({ entry }: HistoryEntryProps) {
  const date = new Date(entry.date);

  return (
    <Box>
      <Text fontSize="xs" fontWeight="semibold" color="secondary.500" mb={2}>
        {formatDate(date)}
      </Text>

      {entry.completedHabits.length === 0 ? (
        <Text fontSize="sm" color="secondary.300">
          Nenhum hábito concluído
        </Text>
      ) : (
        <Flex gap={2} flexWrap="wrap">
          {entry.completedHabits.map((habit) => (
            <HistoryHabitChip key={habit.id} habit={habit} />
          ))}
        </Flex>
      )}
    </Box>
  );
}

function formatDate(date: Date): string {
  if (isToday(date)) return "Hoje";
  if (isYesterday(date)) return "Ontem";
  return format(date, "dd 'de' MMM", { locale: ptBR });
}
