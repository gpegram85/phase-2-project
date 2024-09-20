import { Link } from 'react-router-dom';

function ErrorEle() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to={'/'}>Click to return home.</Link>
    </div>
  );
}

export default ErrorEle;
