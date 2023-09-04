// src/HomePage.js
import React from "react";
import { 
  Box,
  Heading, 
  Text, 
  Button,
  Container,
  Stack, 
  Image,
  Flex, 
  createIcon,
  IconButton,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  chakra,
  SimpleGrid,
 } from "@chakra-ui/react";
 import { BsPerson } from 'react-icons/bs'
 import { FiServer } from 'react-icons/fi'
 import { GoLocation } from 'react-icons/go'

function StatsCard ({ title, stat, icon }){
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        // bgImage="url('https://i.pinimg.com/564x/7c/d4/a1/7cd4a1b2ba0d1eb12b19bcfb47e0f20b.jpg')" 
        // bgSize="cover"
        // bgPosition="center"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              color={'black'}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Write once,
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              use everywhere!
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas quibusdam incidunt molestiae modi veritatis ullam, earum recusandae placeat, minus possimus expedita. Repellendus pariatur ad voluptate iste temporibus ullam ipsa.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              Get started
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
      </Box>


      {/* Stat Section */}
    
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        Our company is expanding, you could be too.
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'Users'} stat={'5,000'} icon={<BsPerson size={'3em'} />} />
        <StatsCard title={'Communities'} stat={'1,000'} icon={<FiServer size={'3em'} />} />
        <StatsCard title={'Cities'} stat={'7'} icon={<GoLocation size={'3em'} />} />
      </SimpleGrid>
    </Box>
    


      {/* Features Section */}
      <Box py={40}>
        <Container>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Features
          </Heading>
          <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
            {/* Feature 1 */}
            <Box flex="1">
              <Image src="https://i.pinimg.com/564x/80/7a/11/807a110f0d45ffe9a3d990e3d006fd28.jpg" alt="Feature 1" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Feature 1
              </Heading>
              <Text>
                Description of the first feature of your product or service.
              </Text>
            </Box>

            {/* Feature 2 */}
            <Box flex="1">
              <Image src="https://i.pinimg.com/564x/80/7a/11/807a110f0d45ffe9a3d990e3d006fd28.jpg" alt="Feature 2" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Feature 2
              </Heading>
              <Text>
                Description of the second feature of your product or service.
              </Text>
            </Box>

            {/* Feature 3 */}
            <Box flex="1">
              <Image src="https://i.pinimg.com/564x/80/7a/11/807a110f0d45ffe9a3d990e3d006fd28.jpg" alt="Feature 3" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                Feature 3
              </Heading>
              <Text>
                Description of the third feature of your product or service.
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box bg="gray.100" py={16}>
        <Container>
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Contact Us
          </Heading>
          <Text fontSize="xl" mb={8} textAlign="center">
            Have questions? Feel free to reach out to us.
          </Text>
          <Button bg="red.400" size="lg" mx="auto" display="block" color={'white'}>
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})



export default HomePage;
