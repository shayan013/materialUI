import React from "react";

import LoginIcon from "@material-ui/icons/AccountCircle";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import {
  Box,
  AppBar,
  Card,
  Toolbar,
  CssBaseline,
  Container,
  Button,
  Grid,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
const cards = [1, 2, 3, , 4, 5, 6, , 7, 8, , 9];
function App() {
  const classes = styles();
  return (
    <div className="header">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          {" "}
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" gutterBottom>
              Photo Album
            </Typography>
            <Typography
              variant="p"
              color="textSecondary"
              align="center"
              paragraph
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              voluptatibus temporibus nisi vitae numquam? Blanditiis nobis,
              magnam dolore amet inventore dolores fugiat asperiores
              voluptatibus, aperiam nostrum sapiente veritatis ipsa expedita?
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                  >
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                  >
                    secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container maxWidth="md" className={classes.grid}>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image="https://source.unsplash.com/random"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem, itaque. Cupiditate numquam quibusdam
                        quisquam facilis.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h5" align="center">
          {" "}
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {" "}
          This is footer
        </Typography>
      </footer>
    </div>
  );
}

export default App;
