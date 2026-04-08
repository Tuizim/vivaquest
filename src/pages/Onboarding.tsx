import { MdOutlineRocketLaunch } from "react-icons/md";
import { Box, Flex, Heading, useToken } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { useState } from "react";
import { Badge } from "@chakra-ui/react"
import { Progress } from "@chakra-ui/react"



export default function Onboarding() {
  const [brand500] = useToken('colors', ['brand.500'])
  const [name, setName] = useState('')
  const [step, setStep] = useState<1 | 2>(1)
  const TOTAL_STEPS = 2

  const progress = (step / TOTAL_STEPS) * 100

  return (
    <Flex minH="100vh" flexDir="column" align="center" px={6} pt={10} as="main">
      <Flex as="section" flexDir="column" w="full" maxW="sm" gap={6}>
        
        <Flex flexDir="column" gap={1} align="center">
          <Badge backgroundColor="brand.100" color="brand.500">
            PASSO {step} DE {TOTAL_STEPS}
          </Badge>
          <Progress.Root value={progress} colorPalette="brand" variant="subtle" width="full" size="xs">
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        </Flex>

        <Flex flexDir="column" align="center" gap={2} textAlign="center" pt={10}>
          <Box w={20} h={20} rounded="3xl" shadow="lg" display="flex" alignItems="center" justifyContent="center" bg="white" mb={4}>
            <MdOutlineRocketLaunch size={48} color={brand500} />
          </Box>
          <Heading size="2xl" fontWeight="bold">
            Vamos começar sua jornada saudável
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Personalize sua experiência para criar hábitos que realmente duram.
          </Text>
        </Flex>

      </Flex>
    </Flex>
  )
}