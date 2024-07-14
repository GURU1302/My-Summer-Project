import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
   <Box padding={'4'}
   bg={'blackAlpha.900'}
   minH={'10vh'}
   >
<Stack direction={['column' , 'row']}>
    <VStack alignItems={['center','flex-start']} width='full'>
    <Heading children="All Rights Reserved" color={'white'} />
    <Heading  children="@since 2024"
        size={'sm'}
        color={'yellow.500'}
        fontFamily={'bold'}
    />
    </VStack>
    
</Stack>
   </Box>
  )
}

export default Footer