import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta, ProjectImage, Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="UEFA Away Goals Rule">
      <Container>
        <Title>
          UEFA&apos;s Away Goals Rule - Champions League Analysis{' '}
          <Badge>Data Analysis</Badge>
        </Title>

        <P>
          Exploratory analysis of UEFA Champions League two-legged knockout
          ties, focusing on the impact of the (now abolished) away goals rule.
        </P>

        <P>
          From 1965 until the start of the 2021/22 season, UEFA competitions
          used away goals to decide ties level on aggregate. Since 2021/22, ties
          level on aggregate go to extra time and, if needed, penalties instead.
        </P>

        <P>
          The notebooks explore questions such as how often ties were decided by
          away goals, how home/away performance differed under the rule, and
          what would have changed in selected ties without away goals.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/HopeSuffers/UEFAAwayGoalRule"
              isExternal
            >
              github.com/HopeSuffers/UEFAAwayGoalRule{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>Platform</Meta>
            <span>Jupyter Notebooks</span>
          </ListItem>

          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, pandas, Jupyter</span>
          </ListItem>

          {/* Optional: replace with a real image path you have in /public/images/projects */}
          <ListItem mt={8}>
            <ProjectImage
              src="/images/projects/UEFA_Champions_League.svg.png"
              alt="UEFA Away Goals Rule analysis"
            />
          </ListItem>

          {/* Optional: add a direct link to your dataset source if you want */}
          <ListItem mt={4}>
            <Meta>Dataset</Meta>
            <Link
              href="https://github.com/CharlieGnomo/champions_uefa_data"
              isExternal
            >
              champions_uefa_data <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Project
