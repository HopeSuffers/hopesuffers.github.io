import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, ProjectImage, Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="inOneWeekend">
      <Container>
        <Title>
          inOneWeekend — Multi-threaded Weekend Ray Tracer{' '}
          <Badge>Computer Graphics</Badge>
        </Title>

        <P>
          A C++ ray tracer implementation inspired by Peter Shirley&apos;s “Ray
          Tracing in One Weekend” series, implemented as a personal learning
          project and extended with practical engineering considerations such as
          multi-threaded rendering and basic performance profiling.
        </P>

        <P>
          The project focuses on core path tracing fundamentals (rays,
          materials, scattering, and progressive image formation) while keeping
          the codebase approachable for iteration and experimentation.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/HopeSuffers/inOneWeekend" isExternal>
              github.com/HopeSuffers/inOneWeekend <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Desktop</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>C++, CMake</span>
          </ListItem>

          <ListItem>
            <Meta>Extras</Meta>
            <span>Magick++ (used to open/view rendered output)</span>
          </ListItem>

          {/* Optional: add a real screenshot you place under /public/images/projects/ */}
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/in_one_weekend.png"
              alt="inOneWeekend ray tracer output"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
