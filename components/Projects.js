import React, { PureComponent } from 'react';

import { Header, Card, Segment, Icon } from 'semantic-ui-react';

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%'
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
];

export default class Projects extends PureComponent {
  handleProjectCardClick(project) {
    alert(project);
  }

  render() {
    return (
      <Segment raised>
        <Header
          as="h2"
          icon
          textAlign="center"
        >
          <Icon name="folder open" />
          <Header.Content>
            Portfolio
          </Header.Content>
        </Header>
        <Card.Group stackable itemsPerRow={4}>
          {items.map(({ header, description, meta }, i) => (
            <Card
              key={i}
              header={header}
              meta={meta}
              description={description}
              onClick={() => this.handleProjectCardClick('hello')}
            />))
          }
        </Card.Group>
      </Segment>
    );
  }
}
