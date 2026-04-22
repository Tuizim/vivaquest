import { MdOutlineRocketLaunch } from "react-icons/md";
import { Badge, Box, Flex, Heading, Progress, Text, useToken } from "@chakra-ui/react";

type OnboardingHeaderProps = {
  step: number;
  totalSteps: number;
};

export function OnboardingHeader({ step, totalSteps }: OnboardingHeaderProps) {
  const [brand500] = useToken("colors", ["brand.500"]);
  const progress = (step / totalSteps) * 100;

  return (
    <>
      <Flex flexDir="column" gap={1} align="center">
        <Badge backgroundColor="brand.100" color="brand.500">
          PASSO {step} DE {totalSteps}
        </Badge>

        <Progress.Root
          value={progress}
          colorPalette="brand"
          variant="subtle"
          width="full"
          size="xs"
        >
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      </Flex>

      <Flex flexDir="column" align="center" gap={2} textAlign="center" pt={10} as="section">
        <Box
          w={20}
          h={20}
          rounded="3xl"
          shadow="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="white"
          mb={4}
        >
          <MdOutlineRocketLaunch size={48} color={brand500} />
        </Box>

        <Heading size="2xl" fontWeight="bold">
          Vamos começar sua jornada saudável
        </Heading>

        <Text fontSize="sm" color="secondary.500">
          Personalize sua experiência para criar hábitos que realmente duram.
        </Text>
      </Flex>
    </>
  );
}