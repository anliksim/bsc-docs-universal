import styled from 'styled-components';

export const Item = styled.li`
  text-decoration: none;
  margin-bottom: 2rem;
  display: block;
  -webkit-transition: color 0.3s ease;
  -moz-transition: color 0.3s ease;
  -o-transition: color 0.3s ease;
  -ms-transition: color 0.3s ease;
  transition: color 0.3s ease;

  &:hover {
    div {
      color: #999;
    }
  }
  div {
    margin-right: 3rem;
  }
`;

export const Title = styled.div`
  display: inline;
  font-size: 3rem;
  color: #333;
`;

export const Date = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: #444;
`;

export const Excerpt = styled.div`
  display: inline;
  font-size: 2rem;
  color: #666;
`;
