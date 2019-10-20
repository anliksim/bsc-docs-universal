import React from 'react';
import PropTypes from 'prop-types';
import { Date, Excerpt, Item, Title } from './listitem.css';
import { Link } from 'gatsby';

const ListItem = ({ id, path, subject, title, date, excerpt }) => (
  <Link to={path}>
    <Item key={id}>
      <Title>
        {subject} {title}
      </Title>
      <Date>{date}</Date>
      <Excerpt>{excerpt}</Excerpt>
    </Item>
  </Link>
);

ListItem.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  subject: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
};

export default ListItem;
