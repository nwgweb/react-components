import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './List.module.scss';

type ListProps = React.AllHTMLAttributes<HTMLUListElement> & {
  scrollbox?: boolean;
}

const ListElement: React.FC<ListProps> = ({ scrollbox, children }) => {
  return (
    <ul styleName={scrollbox ? 'list--scrollbox' : 'list'}>
      {children}
    </ul>
  )
};

type ListItemProps = React.AllHTMLAttributes<HTMLLIElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  key: (string | number | undefined);
};

const ListItemElement: React.FC<ListItemProps> = ({ key, children, ...rest }) => {
  return (
    <li key={key} styleName="listItem" {...rest}>{children}</li>
  )
};

const Container = CSSModules(ListElement, styles);
const Item = CSSModules(ListItemElement, styles);

export default { Container, Item };
