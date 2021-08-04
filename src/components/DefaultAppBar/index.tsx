import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './styles.scss';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import UserLocation from '../../data/model/UserPreferences/UserLocation';

interface StateInterfaceProps {
    userLocation: UserLocation | undefined;
}

export default function DefaultAppBar() {
    const { userLocation } = useSelector<StateInterfaceProps, StateInterfaceProps>((state: StateInterfaceProps) => {
        return {
            userLocation: state.userLocation,
        }
    });
    
    return (
        <AppBar position="static">
            <Toolbar className="DefaultAppBarMain">
                <Link to="/" className="DefaultAnchor">
                    <Typography variant="h4">
                        Weather Info
                    </Typography>
                </Link>
                <div>
                    <Typography variant="h6">
                        {new Date(Date.now()).toDateString()}
                    </Typography>
                    {userLocation &&
                        userLocation.name
                    }
                </div>
            </Toolbar>
        </AppBar>
    );
}