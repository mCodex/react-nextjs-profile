import React, {PureComponent, Fragment} from 'react'
import {Label, Grid} from 'semantic-ui-react'
import {sample} from 'lodash'

const skills = ['NodeJS', 'React', 'React-Native', 'ExpressJS', 'Webpack', 'Serverless Framework', 'Mocha', 'MySQL', 'MongoDB', 'GraphQL', 'Python', 'GNU/Linux', 'GIT' ]

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue'
]
export default class Skills extends PureComponent {
  render() {
    return(
      <Fragment>
        <Grid stackable columns={13}>
          {skills.map(skill =>
            <Grid.Column>
              <Label tag color={sample(colors)}>{skill}</Label>
            </Grid.Column>
          )}
        </Grid>
      </Fragment>
    )
  }
}
