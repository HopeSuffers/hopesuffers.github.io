import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import { ProjectGridItem } from '../components/grid-item'
import Section from '../components/section'
import Layout from '../components/layouts/article'

import thumbPVX from '../public/images/projects/pvx-showcase.jpg'
import thumbUEFA from '../public/images/projects/UEFA_Champions_League.svg.png'
import thumbRtxON from '../public/images/projects/rtxON.png'
import thumbInOneWeekend from '../public/images/projects/in_one_weekend.png'
import thumbForay from '../public/images/projects/foray.png'
import thumbGaussianBlur from '../public/images/projects/gaussian_blur.png'


const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem id="pvx" title="PuttView X" thumbnail={thumbPVX}>
              Augmented Reality Golf Training for the outdoors.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="uefa-away-goals-rule"
              title="UEFA Away Goals Rule"
              thumbnail={thumbUEFA}
            >
              Data analysis of UEFA Champions League knockout matches and the
              historical impact of the away goals rule.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem id="rtxON" title="rtxON" thumbnail={thumbRtxON}>
              Simple Vulkan ray tracing tutorials (forked &amp; extended).
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="gaussian-blur"
              title="Gaussian Blur (CUDA)"
              thumbnail={thumbGaussianBlur}
            >
              GPU-accelerated Gaussian blur for images implemented in CUDA.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem
              id="inOneWeekend"
              title="inOneWeekend"
              thumbnail={thumbInOneWeekend}
            >
              Multi-threaded “Ray Tracing in One Weekend” C++ path tracer.
            </ProjectGridItem>
          </Section>

          <Section>
            <ProjectGridItem id="foray" title="Foray" thumbnail={thumbForay}>
              Rapid prototyping framework for cross-platform Vulkan hardware ray
              tracing demos.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
