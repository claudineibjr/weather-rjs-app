import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './styles.scss';
import { Link } from "react-router-dom";

export default function DefaultAppBar() {
    return (
        <AppBar position="static">
            <Toolbar className="DefaultAppBarMain">
                <Link to="/" className="DefaultAnchor">
                    <Typography variant="h4">
                        Weather Info
                    </Typography>
                </Link>
                <Typography variant="h6">
                    {new Date(Date.now()).toDateString()}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}