'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import {auth} from '../../firebase'
import {Link , useNavigate} from 'react-router-dom'

export default function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');

  const SignIn_fun = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(auth ,email,password)
    .then((userCredential)=> {
        console.log(userCredential);
        if (userCredential.user) {
            navigate('/'); // Replace '/homepage' with the actual URL of your homepage route
          }
        })
        .catch((error) => {
          console.error(error);
          // Handle login failure here if needed
        });
        
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                 onClick={SignIn_fun}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}