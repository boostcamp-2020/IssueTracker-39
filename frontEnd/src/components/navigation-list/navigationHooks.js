import {useRouteMatch} from 'react-router-dom';
const navigationMatcher = () => {
  const match = useRouteMatch();
  return {
    isLabelMatch: match.path === '/label',
    isMileStoneMatch: match.path.startsWith('/milestone'),
  };
};

export default navigationMatcher;
