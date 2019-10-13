/**
 * title: Hello React
 * Routes:
 *  - src/routes/a.js
 */
import styles from './index.css';
import { connect } from 'dva';
// import { Link } from 'dva/router';
import Link from 'umi/link';

const Index = props => {
  return (
    <div>
      <ul>
        {[{ id: 1, name: 'apple' }, { id: 2, name: 'banana' }, { id: 3, name: 'orange' }].map(
          item => {
            return (
              <li key={item.id}>
                <Link to={`/detail/${item.name}`}>{item.name}</Link>{' '}
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};

export default connect(({ hello }) => {
  return {
    name: hello.name,
  };
})(Index);
