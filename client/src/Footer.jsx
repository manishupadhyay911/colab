
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa';
function Footer() {
  return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}
    >
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}>
      <Text>Made with ❤ by Manish Upadhyay</Text>
      
      <Stack direction={'row'} spacing={6}>
        <a href='https://linkedin.com/in/manish-upadhyay-b23b9a184' target="_blank"><FaLinkedinIn/></a>
        <a href='https://github.com/manishupadhyay911' target="_blank"><FaGithub/></a>

      </Stack>
    </Container>
  </Box>
  )
}

export default Footer