import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, ProjectImage, Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Gaussian Blur (CUDA)">
      <Container>
        <Title>
          Gaussian Blur on Images with CUDA <Badge>GPU / CUDA</Badge>
        </Title>

        <P>
          CUDA implementation of Gaussian blur for images, focusing on parallel
          convolution on the GPU. The project applies a Gaussian kernel to an
          input image and produces a blurred output with significantly improved
          throughput compared to a CPU baseline.
        </P>

        <P>
          The implementation is structured around CUDA kernels and typical GPU
          optimization considerations such as memory access patterns and
          minimizing overhead in the blur pass.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/HopeSuffers/gaussian-blur"
              isExternal
            >
              github.com/HopeSuffers/gaussian-blur <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>NVIDIA GPU</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>CUDA, C/C++</span>
          </ListItem>

          <ListItem>
            <Meta>Topic</Meta>
            <span>Image processing (Gaussian convolution)</span>
          </ListItem>

          {/* Optional: add a before/after image you place under /public/images/projects/ */}
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/gaussian_blur.png"
              alt="CUDA Gaussian blur output example"
            />
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
