import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href

  return (
    <NextLink href={href} passHref>
      <Link
        px={3}
        py={1}
        fontWeight="medium"
        lineHeight="1.2"
        bg={active ? 'brand.teal' : 'transparent'}
        color={active ? 'brand.crust' : 'brand.text'}
        borderRadius="md"
        _hover={{ textDecoration: 'none', bg: 'brand.surface1' }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }) => {
  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg="rgba(30, 32, 48, 0.8)"
      style={{ backdropFilter: 'blur(12px)' }}
      zIndex={1}
    >
      <Container maxW="container.md" py={2}>
        <Flex align="center" position="relative">
          {/* Logo — left */}
          <Flex align="center">
            <Heading
              as="h1"
              size="lg"
              fontWeight="normal"
              letterSpacing="tighter"
              lineHeight="1"
              m={0}
            >
              <Logo />
            </Heading>
          </Flex>

          {/* Centered desktop nav */}
          <Flex
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            align="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <Stack direction="row" spacing={6} align="center">
              <LinkItem path={path} href="/">
                About
              </LinkItem>
              <LinkItem path={path} href="/projects">
                Projects
              </LinkItem>
            </Stack>
          </Flex>

          {/* Mobile menu — right */}
          <Box ml="auto" display={{ base: 'block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="ghost"
                aria-label="Menu"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <Link href="https://github.com/hopesuffers/hopesuffers.github.io" isExternal>
                  <MenuItem>
                    View Source&nbsp;
                    <ExternalLinkIcon />
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
