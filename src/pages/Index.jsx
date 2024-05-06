import { Box, Flex, Text, VStack, Input, Button, Switch, FormControl, FormLabel, useBreakpointValue } from "@chakra-ui/react";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex height="100vh" direction={isMobile ? "column" : "row"} overflow="hidden">
      <Flex flex={1} bg="blue.50" p={4} direction="column" overflowY="auto">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Messages</Text>
          <Flex direction="column" width="100%">
            <Input placeholder="Search messages" mb={4} />
            <Flex direction="column" flex="1" overflowY="auto">
              {/* Example messages */}
              <Text bg="gray.100" p={2} borderRadius="md" mb={2}>Hello! How are you?</Text>
              <Text bg="gray.100" p={2} borderRadius="md" mb={2}>This is a test message.</Text>
            </Flex>
          </Flex>
        </VStack>
      </Flex>
      <Flex flex={1} bg="green.50" p={4} direction="column" overflowY="auto">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">Privacy Settings</Text>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Email Alerts
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="sms-notifications" mb="0">
              SMS Notifications
            </FormLabel>
            <Switch id="sms-notifications" />
          </FormControl>
          <Button colorScheme="blue">Save Settings</Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Index;