import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const LogoImageWrapper = styled.span`
  display: inline-flex;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

const Logo = () => {
  const img = '/images/profile.jpeg'

  return (
    <Link href="/" legacyBehavior>
      <a>
        <LogoBox>
          <LogoImageWrapper>
            <Image src={img} width={24} height={24} alt="logo" />
          </LogoImageWrapper>

          <Text
            fontFamily="M PLUS Rounded 1c"
            ml={3}
            display="inline-flex"
            gap={1}
            color="brand.text"
          >
            <Text as="span" fontWeight="400">
              Maurice
            </Text>
            <Text as="span" fontWeight="700">
              Ach
            </Text>
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
