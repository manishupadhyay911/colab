import React from 'react'
import { useNavigate,Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid"
import img from '../public/home.webp'
import { Box, Button, Container,Image,Show } from '@chakra-ui/react';


function Home() {

    
  return (
    <Container maxWidth={{base:"300px",sm:"500px",md:"3xl"}} alignItems="center">
      <Box maxWidth={{base:"300px",sm:"500px",md:"3xl"}} textAlign="center">
        <Button><Link to={`/documents/${uuidV4()}`}>Create new room</Link></Button>
        <Image src={img} m="20px"></Image>

        
      </Box>

    </Container>
  )
}

export default Home