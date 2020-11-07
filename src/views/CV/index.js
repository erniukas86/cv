/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import avatar from "assets/img/faces/ernis.jpg";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import Item from './Item';
import { projects } from './projects';
import GridItem from "components/Grid/GridItem";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import Tools from "@material-ui/icons/Build";
import Skills from "@material-ui/icons/Star";
import Education from "@material-ui/icons/School";
import Certifications from "@material-ui/icons/CardMembership";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <div className="content">
        <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Developer</h6>
              <h4 className={classes.cardTitle}>Ernestas Burokas</h4>
              <p className={classes.description}>
                Experienced Developer with a demonstrated history of working in the information technology and services industry. 
                Skilled in ASP.NET MVC and React. Strong engineering professional with a Master's degree focused in Software Engineering from 
                Kaunas University of Technology. 
              </p>
            </CardBody>
          </Card>
          <div style={{textAlign: 'center'}}>
          <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <h2>Skills</h2>
            <Card>
                <CardHeader color="success" stats icon>
                <CardIcon color="success">
                    <Skills />
                </CardIcon>
                </CardHeader>
                <CardBody style={{textAlign: 'left'}}>
                    <p className={classes.cardCategory}>React <Slider style={{color: '#66bb6a'}} value={78} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>React Native <Slider style={{color: '#66bb6a'}} value={60} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>C# <Slider style={{color: '#66bb6a'}} value={62} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>MVC <Slider style={{color: '#66bb6a'}} value={70} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>JavaScript <Slider style={{color: '#66bb6a'}} value={87} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>JQuery <Slider style={{color: '#66bb6a'}} value={84} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>HTML5 <Slider style={{color: '#66bb6a'}} value={87} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>CSS <Slider style={{color: '#66bb6a'}} value={55} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>SQL <Slider style={{color: '#66bb6a'}} value={50} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>Kncokout.js <Slider style={{color: '#66bb6a'}} value={50} valueLabelDisplay="on"></Slider></p>
                    <p className={classes.cardCategory}>TypeScript <Slider style={{color: '#66bb6a'}} value={60} valueLabelDisplay="on"></Slider></p>
                </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <h2>Tools</h2>
            <Card>
                <CardHeader color="success" stats icon>
                <CardIcon color="success">
                    <Tools />
                </CardIcon>
                </CardHeader>
                <CardBody style={{textAlign: 'left'}}>
                <p className={classes.cardCategory}>Visual Studio <Slider style={{color: '#66bb6a'}} value={70} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Visual Studio Code <Slider style={{color: '#66bb6a'}} value={70} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Sql Server Man. Studio <Slider style={{color: '#66bb6a'}} value={60} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Microsoft Azure <Slider style={{color: '#66bb6a'}} value={50} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Azure DevOps <Slider style={{color: '#66bb6a'}} value={55} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>GIT <Slider style={{color: '#66bb6a'}} value={70} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>SVN <Slider style={{color: '#66bb6a'}} value={50} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Cordova <Slider style={{color: '#66bb6a'}} value={60} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Microsoft Office <Slider style={{color: '#66bb6a'}} value={65} valueLabelDisplay="on"></Slider></p>
                <p className={classes.cardCategory}>Adobe Photoshop <Slider style={{color: '#66bb6a'}} value={45} valueLabelDisplay="on"></Slider></p>
                </CardBody>
            </Card>
          </GridItem>
          </GridContainer>
            <div>
                <h2>Projects</h2>
                <GridContainer>
                    {projects.map(item => <Item {...item} />)}
                </GridContainer>
            </div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                    <h2>Certifications</h2>
                    <Card>
                        <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <Certifications />
                        </CardIcon>
                        </CardHeader>
                        <CardBody style={{textAlign: 'left'}}>
                            <List className={classes.root}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Certifications />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Microsoft: Solutions developer: App builder" secondary="2017 April, License G067-5524" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Certifications />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Microsoft: Web applications charter member" secondary="2017 February, License F989-2850" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Certifications />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Microsoft: Microsoft certified professional" secondary="2016 October, License F989-0529" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Certifications />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Microsoft: Programming in HTML5 with JS and CSS" secondary="2016 October, License F859-0535" />
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                    <h2>Education</h2>
                    <Card>
                        <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                            <Education />
                        </CardIcon>
                        </CardHeader>
                        <CardBody style={{textAlign: 'left'}}>
                        <List className={classes.root}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Education />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="KTU: Master's degree in software engineering" secondary="2014 September - 2016 June" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Education />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="KTU: Bachelor's degree in multimedia technologies" secondary="2010 September - 2014 June" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Education />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Žiburys gimnasium: secondary education degree" secondary="2007 September - 2009 June" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <Education />
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Užuguostis primary schoold: basic education degree" secondary="1997 September - 2007 June" />
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
          </div>
          <div>
          </div>
    </div>
  );
}
