import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, CardHeader } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, title, precio, img, ingredients }) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      objectFit='cover'
      maxW={{ base: '100%', sm: '300px' }}
      src={img}
      alt={title}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Card fontSize='sm'>
        {ingredients}
      </Card>
      <Text color='green.700' fontSize='3xl'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='green'>
        <Link to={`/producto/${id}`}>
                    Ver Detalles
        </Link>
      </Button>
          
    </ButtonGroup>
   
  </CardFooter>
</Card>
  );
};

export default Item;