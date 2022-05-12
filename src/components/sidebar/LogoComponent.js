import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { IconLogo } from 'assets/icons';

const useStyles = createUseStyles((theme) => ({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue,
        opacity: 0.7,
        marginLeft: 12
    }
}));

function LogoComponent() {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <Row  horizontal='center' vertical='center'>
            {/* <IconLogo /> */}
            <img height='100px' width="100%" src='https://th.bing.com/th/id/OIP.QtNaTuD9WqD06VDpvMQA4QAAAA?w=194&h=129&c=7&r=0&o=5&dpr=1.5&pid=1.7' />
            {/* <span className={classes.title}>CIRRUS LABS </span> */}
        </Row>
    );
}

export default LogoComponent;
