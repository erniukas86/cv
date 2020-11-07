/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import Project from "@material-ui/icons/LibraryBooks";
import CardFooter from "components/Card/CardFooter.js";
import Technologies from "@material-ui/icons/EmojiObjects";
import Challenge from "@material-ui/icons/FilterHdr";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

export default function Item({name, date, description, challenge, technologies}) {
  const classes = useStyles();
  return (
        <GridItem xs={12} sm={6} md={6}>
            <Card>
                <CardHeader color="success" stats icon>
                <CardIcon color="success">
                    <Project />
                </CardIcon>
                <p className={classes.cardCategory}>{date}</p>
                <h3 className={classes.cardTitle}>{name}</h3>
                </CardHeader>
                <CardBody style={{textAlign: 'left'}}>
                    <p className={classes.cardCategory}>{description}</p>
                    {challenge && <>
                        <p className={classes.cardCategory}>
                        <Challenge />
                        <span style={{marginLeft: 5}}>Challenge:</span>
                        </p>
                        <p className={classes.cardCategory}>
                            {challenge}
                        </p>
                    </>}           
                </CardBody>
                <CardFooter stats>
                <div className={classes.stats}>
                    <Technologies />
                    Used technologies: {technologies}
                </div>
                </CardFooter>
            </Card>
        </GridItem>  
  );
}
