import { Box, Flex, Input, Text } from "@chakra-ui/react";
import {
  EditIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
export default function TodoCard({ elm, handelDel, handelEdit, handelToggle }) {
 
 
 
 
  return (
    <Box>
      <Flex
        boxShadow={"dark-lg"}
        flexDirection={"column"}
        borderRadius="40px"
        p="10"
        gap={10}
        bg={elm.status ? "" : "red.300"}
        opacity={"900%"}
      >
        <Box>
          <Text
            fontFamily={"cursive"}
            fontSize={{ base: "xl", md: "lg", lg: "xl" }}
            as="i"
          >
            {elm.titel}
          </Text>
        </Box>

        <Box
          borderRadius={"20px"}
          bg={elm.status ? "" : "red.100"}
          fontSize={"xl"}
          border={"1px solid red"}
          as={elm.status ? "s" : "i"}
          textAlign={"center"}
          color={"black"}
        >
          note:-{elm.additionalnote}
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-evenly"
          h="30px"
          color={elm.status ? "green.500" : "red.600"}
          bg="black"
          borderRadius={"20px"}
        >
          Status
          {elm?.status ? (
            <Box>
              <CheckIcon />
            </Box>
          ) : (
            <Box>
              <CloseIcon />
            </Box>
          )}
        </Box>
        <Flex justifyContent={"space-evenly"} p="3">
          <Box>
            <EditIcon
              boxSize={7}
              _hover={{
                cursor: "pointer",
                color: "orange.300",
                transform: "scale(2)",
              }}
              onClick={() => handelEdit(elm._id)}
            />
          </Box>
          <Box onClick={() => handelToggle(elm._id)}>
            {elm.status ? (
              <ArrowDownIcon
                boxSize={7}
                _hover={{
                  cursor: "pointer",
                  color: "pink.600",
                  transform: "scale(2)",
                }}
              />
            ) : (
              <ArrowUpIcon
                boxSize={7}
                _hover={{
                  cursor: "pointer",
                  color: "pink.600",
                  transform: "scale(2)",
                }}
              />
            )}
          </Box>
          <Box>
            <DeleteIcon
              boxSize={7}
              _hover={{
                cursor: "pointer",
                color: "red.600",
                transform: "scale(2)",
              }}
              onClick={(elm) => handelDel(elm._id)}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
