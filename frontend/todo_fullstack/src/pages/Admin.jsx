import { Box, Flex, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Admin() {
  const [smallerDisplay] = useMediaQuery("(max-width: 800px)");

  const [data, setdata] = useState([]);

  const getData = () => {
    return fetch("https://wide-eyed-tam-duck.cyclic.app/alltodo", {
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    }).then((res) => res.json());
  };
  const [count, setcount] = useState(1);

  const handelDel = (id) => {
    fetch(`https://wide-eyed-tam-duck.cyclic.app/admin/del/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: JSON.parse(localStorage.getItem("token")),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setcount(count + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData()
      .then((res) => {
        setdata(res.data);
      })
      .catch((error) => {
        console.log(error, "error in admin fetch");
      });
  }, [count]);

  return (
    <Box p={5}>
      Admin page
      {data &&
        data.map((elm) => (
          <Box
            display="flex"
            gap={{ sm: 5, md: 30, lg: 50 }}
            p={{ base: 3, md: 4, lg: 5 }}
            key={elm._id}
          >
            <Flex
              boxShadow={"2xl"}
              p="5"
              w={{ sm: "100%", base: "80%", lg: "100%" }}
              m="auto"
              alignItems={"center"}
              justifyContent={"space-evenly"}
            >
              {!smallerDisplay && (
                <Text fontSize={{ base: "xl", md: "xl", lg: "2xl" }}>
                  unique id:-{elm._id}
                </Text>
              )}
              <Text
                fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
                color="teal.500"
              >
                NAME:-{elm.name}
              </Text>
              <Text>{elm.email}</Text>
              <Button onClick={() => handelDel(elm._id)}>Del User</Button>
            </Flex>
          </Box>
        ))}
    </Box>
  );
}
