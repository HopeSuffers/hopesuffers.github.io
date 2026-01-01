import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, ProjectImage, Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="rtxON">
      <Container>
        <Title>
          rtxON - Vulkan Raytracing Tutorials <Badge>Graphics / RTX</Badge>
        </Title>

        <P>
          A set of simple Vulkan raytracing tutorials based on the iOrange/rtxON
          framework, demonstrating how to build RTX-enabled real-time rendering
          with ray tracing. The project includes small sample scenes like a
          “Happy Triangle”, a chrome teapot, and a glass bunny to showcase
          raytraced outputs.
        </P>

        <P>
          Designed as actionable learning content, you can clone the project,
          build the Vulkan RT samples with CMake, and explore real-time ray
          traced output on supported GPUs.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/HopeSuffers/rtxON" isExternal>
              github.com/HopeSuffers/rtxON <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Desktop (Windows / Linux)</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>C++, Vulkan, GLSL, CMake</span>
          </ListItem>

          <ListItem>
            <Meta>Technique</Meta>
            <span>Real-Time Ray Tracing via Vulkan RT extensions</span>
          </ListItem>

          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/rtxON.png"
              alt="rtxON Vulkan raytracing screenshots"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
