import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/list/listitem';
import { Container } from './list.css';

const List = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <ListItem {...item} key={i} />
    ))}
  </Container>
);

List.propTypes = {
  items: PropTypes.object.isRequired,
};

export default List;
