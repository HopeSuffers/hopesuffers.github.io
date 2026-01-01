import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, ProjectImage, Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Foray">
      <Container>
        <Title>
          Foray - Vulkan Ray Tracing Prototyping Framework{' '}
          <Badge>Graphics / Vulkan</Badge>
        </Title>

        <P>
          Foray is a rapid prototyping framework for cross-platform development
          of Vulkan hardware ray tracing demos and applications. It provides a
          reusable foundation for building and iterating on ray tracing projects
          without repeatedly rebuilding boilerplate platform and rendering
          setup.
        </P>

        <P>
          The project is documented with Doxygen-hosted pages and includes a
          broader ecosystem of example and research projects built on top of the
          framework (e.g., example ray tracers, GBuffer demos, and denoising
          experiments).
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Vulkemp/foray" isExternal>
              github.com/Vulkemp/foray <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Docs</Meta>
            <Link href="https://vulkemp.github.io/foray/index.html" isExternal>
              vulkemp.github.io/foray <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Cross-platform (desktop-focused)</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>C++, Vulkan, GLSL, CMake</span>
          </ListItem>

          <ListItem>
            <Meta>Focus</Meta>
            <span>Vulkan hardware ray tracing prototyping</span>
          </ListItem>

          {/* Optional: replace with a real image you place under /public/images/projects/ */}
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/foray.png"
              alt="Foray framework preview"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
