import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  Text,
  VStack,
  HStack,
  UnorderedList,
  useColorModeValue,
  Divider
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'

import { IoLogoDiscord, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  const subtle = useColorModeValue('gray.600', 'whiteAlpha.700')
  const bullet = useColorModeValue('gray.700', 'whiteAlpha.800')
  const sectionUnderline = useColorModeValue('teal.500', 'teal.300')

  const RoleHeader = ({ title, company, meta }) => (
    <VStack align="start" spacing={1}>
      <Text fontWeight="semibold" lineHeight="short">
        {title}{' '}
        <Text as="span" fontWeight="normal">
          @ {company}
        </Text>
      </Text>
      <Text fontSize="sm" color={subtle}>
        {meta}
      </Text>
    </VStack>
  )

  const Bullets = ({ items }) => (
    <UnorderedList spacing={1.5} pl={4} mt={2} color={bullet}>
      {items.map(it => (
        <ListItem key={it}>
          <Text as="span">{it}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  )

  const SectionTitle = ({ children }) => (
    <Heading
      as="h3"
      fontSize={26}
      mb={4}
      display="inline-block"
      textDecoration="underline"
      textUnderlineOffset={6}
      textDecorationThickness="4px"
      textDecorationColor={sectionUnderline}
    >
      {children}
    </Heading>
  )

  return (
    <Layout>
      <Container>
        {/* Header */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading
              as="h1"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="normal"
              letterSpacing="-0.02em"
              lineHeight="short"
              color={useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')}
            >
              Maurice{' '}
              <Box as="span" fontWeight="bold">
                Ach
              </Box>
            </Heading>

            <Text>
              Software Engineer – Scrum Master (M.Sc.) @ PuttView | AR Glasses •
              Computer Vision | Real-time Tracking
            </Text>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={1}
              borderStyle="solid"
              maxWidth="80px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Divider my={{ base: 6, md: 10 }} opacity={0.25} />

        {/* Work */}
        <Box mt={6}>
          <Section delay={0.1}>
            <SectionTitle>Work</SectionTitle>

            <List spacing={3} mt={2}>
              <ListItem>
                ⚙️ Building next-gen golf training experiences at{' '}
                <Link href="https://www.puttview.com/" isExternal>
                  PuttView <ExternalLinkIcon mx="2px" />
                </Link>
                , including refactoring and expanding{' '}
                <strong>PuttView X</strong>, real-time ball tracking (YOLO +
                CUDA/TensorRT), and optimized physics systems.
              </ListItem>

              <ListItem>
                ⚡ Pushing the limits of <strong>GPU programming</strong>: CUDA
                + Metal compute shaders, ray tracing explorations, and
                high-performance inference stacks (100+ FPS tracking on RTX
                3080).
              </ListItem>

              <ListItem>
                🥽 Experimenting with <strong>Apple Vision Pro</strong> using
                Xcode, ARKit, and RealityKit, focusing on highly optimized
                algorithms and fast-running Metal shaders.
              </ListItem>

              <ListItem>
                🔦 Developed a <strong>full GPU path tracer</strong> for NVIDIA
                GPUs, implementing physically based rendering with CUDA, BVH
                traversal, importance sampling, and real-time visualization
                pipelines.
              </ListItem>
            </List>

            <Box align="center" my={6}>
              <NextLink href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Projects
                </Button>
              </NextLink>
            </Box>
          </Section>

          <Divider my={{ base: 6, md: 10 }} opacity={0.25} />

          {/* Bio */}
          <Section delay={0.2}>
            <SectionTitle>Bio</SectionTitle>

            <VStack align="stretch" spacing={5} mt={2}>
              <BioSection>
                <HStack align="start" spacing={4}>
                  <BioYear>Dec 2025 – Present</BioYear>
                  <Box flex="1">
                    <RoleHeader
                      title="Software Engineer – Scrum Master"
                      company="PuttView"
                      meta="Hamburg, Germany · Remote"
                    />
                    <Bullets
                      items={[
                        'Introduced SCRUM processes, significantly improving software stability and team collaboration.'
                      ]}
                    />
                  </Box>
                </HStack>
              </BioSection>

              <BioSection>
                <HStack align="start" spacing={4}>
                  <BioYear>Mar 2023 – Dec 2025</BioYear>
                  <Box flex="1">
                    <RoleHeader
                      title="Software Engineer"
                      company="PuttView"
                      meta="Hamburg, Germany · Remote"
                    />
                    <Bullets
                      items={[
                        'Led architectural improvements for PuttView X, stabilized WebSocket connections, introduced automatic updates, and delivered a major stability release.',
                        'Built end-to-end AI ball-tracking pipelines, fine-tuned YOLO models, and integrated solutions into Unity and external platforms.',
                        'Prototyped AR glasses integration and CV-based ball tracking (YOLOv11); delivered game modes showcased at the PGA Show.',
                        'Rebuilt the physics engine as a reusable Unity package, reducing computational cost and fixing critical edge-case bugs.',
                        'Designed CI/CD infrastructure using repurposed office hardware, reducing build times by ~10 minutes per build.',
                        'Unified software architecture across indoor and outdoor platforms to support future hardware integrations.',
                        'Implemented local network update distribution for HoloLens deployments.'
                      ]}
                    />
                  </Box>
                </HStack>
              </BioSection>

              <BioSection>
                <HStack align="start" spacing={4}>
                  <BioYear>Dec 2021 – Sep 2022</BioYear>
                  <Box flex="1">
                    <RoleHeader
                      title="Software Developer (Work Study)"
                      company="AMD"
                      meta="Munich, Bavaria, Germany · Remote"
                    />
                    <Bullets
                      items={[
                        'Worked on next-generation graphics pipelines using Vulkan and DirectX 12, implementing shader features with GLSL and HLSL.',
                        'Improved and stabilized a low-level GPU performance profiler, enhancing accuracy and developer usability.'
                      ]}
                    />
                  </Box>
                </HStack>
              </BioSection>

              <BioSection>
                <HStack align="start" spacing={4}>
                  <BioYear>Sep 2019 – Nov 2021</BioYear>
                  <Box flex="1">
                    <RoleHeader
                      title="XR Developer (Work Study)"
                      company="DACHSER"
                      meta="Kempten, Bavaria, Germany · Hybrid"
                    />
                    <Bullets
                      items={[
                        'Designed and implemented a programmable warehouse training environment in Unity with VR support.',
                        'Built a real-time digital twin using @ILO data, visualizing pallet movement and heatmaps in HoloLens.',
                        'Reconstructed pallet volumes using photogrammetry to support logistics cost estimation.'
                      ]}
                    />
                  </Box>
                </HStack>
              </BioSection>
            </VStack>
          </Section>
        </Box>

        <Divider my={{ base: 6, md: 10 }} opacity={0.25} />

        {/* Socials */}
        <Section delay={0.5}>
          <SectionTitle>Socials</SectionTitle>
          <List>
            <ListItem>
              <Link href="https://github.com/HopeSuffers" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @HopeSuffers
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://discord.gg/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  @hopesuffers
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.linkedin.com/in/maurice-ach/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Maurice Ach
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
