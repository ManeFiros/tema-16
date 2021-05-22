import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function ButtonNav({to, label, children}) { 
    //useEffect(() => { console.log(`useEffect Card ${props.title}`); });
    return (
      <Link to={to} className="Nav-link">
            <label className="Nav-link MuiBottomNavigationAction-label MuiBottomNavigationAction-iconOnly" name={label}>
                <IconButton aria-label={label} className="Nav-link MuiBottomNavigationAction-label MuiBottomNavigationAction-iconOnly  MuiBottomNavigationAction-root">
                    {children}
                </IconButton>
            </label>
      </Link>
    );
  }