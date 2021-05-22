import React, {memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'; 
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height:550
  },
  media: {
    height: 400,
  },
});

function MediaCard(props) {
  const classes = useStyles();
  //useEffect(() => { console.log(`useEffect Card ${props.title}`); });
  return (
    <Link to={props.to}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.category} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>
  );
}

export default memo(MediaCard);