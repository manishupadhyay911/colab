import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import {Flex,Text,Image,Box,Stack, Heading} from '@chakra-ui/react'
import icon from '../public/icon.jpg'
function Navbar() {
  return (
   
    <Flex bg="#423a32" mb="10px">
      <Link to={`/`}>
      <Stack direction='row' spacing='0px' bg="#423a32">
        <Image src={icon} boxSize='50px'></Image>
        <Heading color="white" mt="5px">olab</Heading>
      </Stack>
      </Link>
        
    </Flex>

  )
}

export default Navbar