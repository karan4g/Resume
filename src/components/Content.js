import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "@/styles/Home.module.css";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Typography from "@mui/material/Typography";

export default function Content() {
  return (
    <div id="component-container">
      <hr className="solid"></hr>
      <Grid container spacing={0} className="content">
        <Section1 />
        <Section2 />
        <Section3 />
      </Grid>
    </div>
  );
}

function Section1() {
  return (
    <>
      <Grid className="grid-item" item lg={3} xs={12}>
        <div className="custom-flex-box">
      <Typography variant="h4">Contact</Typography>
        <List className="side-listing">
          {/* <ListItem>
         
          </ListItem> */}
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneAndroidIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="+91 12345678" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="tonystark@yopmail.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary=" Meena Bazaar, Jama Masjid, Chandni Chowk, Delhi, 110006 " />
          </ListItem>
        </List>
        </div>
      </Grid>

      <Grid className="grid-item" item lg={9} xs={12}>
        <Typography variant="h4">Profile</Typography>
        <p>
          Experienced Web Developer adept in all stages of advanced web
          development. Knowledgeable in user interface, testing, and debugging
          processes. Bringing forth expertise in design, installation, testing
          and maintenance of web systems. Equipped with a diverse and promising
          skill-set. Proficient in an assortment of technologies, including
          PHP(Wordpress, Laravel, Codeigniter, Magento), Javascript (React Js,
          Vue js ). Able to effectively self-manage during independent projects,
          as well as collaborate in a team setting
        </p>
      </Grid>
    </>
  );
}

function Section2() {
  return (
    <>
      <Grid className="grid-item section2" item lg={3} xs={12}>
        <div className="custom-flex-box">
      <Typography variant="h4">SKILLS</Typography>
        <List className="side-listing">
          {/* <ListItem>
          
          </ListItem> */}
          <ListItem>
            <ListItemText primary="Laravel" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Codeigniter" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Wordpress" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Mangento" />
          </ListItem>
          <ListItem>
            <ListItemText primary="React js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Vue js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Angular js" />
          </ListItem>
        </List>
        </div>
      </Grid>
      <Grid className="grid-item" item lg={9} xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">
             Corporate Work Experience (4 + Years)
            </Typography>
          </Grid>
          <Grid className="children-left" item lg={9} xs={12}>
            <Typography className="my-training" variant="h5">
              Laravel/Wordpress training
            </Typography>
          </Grid>
          <Grid className="children-right" item lg={3} xs={12}></Grid>
          <Grid className="children-left" item lg={9} xs={6}>
            <h4>Test technologies</h4>
          </Grid>
          <Grid item className="children-right" lg={3} xs={6}>
            <h4>Mar 2019-Nov 2019</h4>
          </Grid>

          <Grid className="children-left" item lg={9} xs={12}>
            <Typography className="my-training" variant="h5">
              Web Developer
            </Typography>
          </Grid>
          <Grid className="children-right" item lg={3} xs={12}></Grid>
          <Grid className="children-left" item lg={9} xs={6}>
            <h4>Test Infotech</h4>
          </Grid>
          <Grid item className="children-right" lg={3} xs={6}>
            <h4>Nov 2019-Mar 2021</h4>
          </Grid>
          <Grid item className="children-right" lg={12} xs={12}>
            <List style={{ listStyle: "disc" }}>
              <ListItem sx={{ display: "list-item" }}>
                <p>
                  Developed an API that connected the web application with 3rd
                  party services and enabled the exchange of data in real-time
                </p>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <p>
                  Collaborated with cross-functional teams to identify customer
                  requirements and develop technical solutions
                </p>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                <p>
                  Implemented a responsive design that ensured the web
                  application was accessible on all devices
                </p>
              </ListItem>
            </List>
          </Grid>

          {/* <Grid container spacing={2}> */}
            <Grid item className="children-left" lg={9} xs={12}>
              <Typography className="my-training" variant="h5">
                Web Developer
              </Typography>
            </Grid>
            <Grid className="children-right" item lg={3} xs={12}></Grid>
            <Grid className="children-left" item lg={9} xs={6}>
              <h4>Test Solutions</h4>
            </Grid>
            <Grid item className="children-right" lg={3} xs={6}>
              <h4>Mar 2021-July 2023</h4>
            </Grid>
            <Grid item className="children-left" lg={12} xs={12}>
              <List style={{ listStyle: "disc" }}>
                <ListItem sx={{ display: "list-item" }}>
                  <p>
                    Utilized object-oriented programming (OOP) principles to
                    improve code readability and maintainability
                  </p>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <p>
                    Implemented a responsive design that ensured the web
                    application was accessible on all devices
                  </p>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <p>
                    Developed an API that connected the web application with 3rd
                    party services and enabled the exchange of data in real-time
                  </p>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      {/* </Grid> */}
    </>
  );
}

function Section3() {
  return (
    <>
      <Grid className="grid-item language-section" item lg={3} xs={12}>
        <div className="custom-flex-box">
        <Typography variant="h4">LANGUAGES</Typography>
      
        <List className="language-list side-listing">
          {/* <ListItem>
         
          </ListItem> */}
          <ListItem>
            <ListItemText primary="English" />
            <hr className="language" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Hindi" />
            <hr className="language" />
          </ListItem>
          <ListItem>
            <ListItemText primary=" Punjabi " />
            <hr className="language" />
          </ListItem>
        </List>
        </div>
      </Grid>
      <Grid item className="grid-item children-left" lg={9} xs={12}>
      <div className="custom-flex-box">

        <Typography className="my-training" variant="h5">
          Projects
        </Typography>
        <List style={{ listStyle: "disc" }}>
          <ListItem sx={{ display: "list-item" }}>
            <p>
              <a>https://www.facebook.com/campaign/landing.php</a>
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p>
              <a>https://www.youtube.com/</a>
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p>
              <a>https://www.google.co.in</a>
            </p>
          </ListItem>
        </List>
        </div>
      </Grid>
    </>
  );
}
