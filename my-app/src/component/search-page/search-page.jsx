import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Layout = styled("div")(({theme}) => ({
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto"
    },
  }));
  const HeroContent = styled("div")(({theme}) => ({
    maxWidth: 600,
         margin: "0 auto",
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
}));
const cardHeader = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.grey[200]
   
}));
const CardPricing = styled("div")(({theme}) => ({
        display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing.unit * 2
}));
// const CardActions = styled("div")(({theme}) => ({
//        [theme.breakpoints.up("sm")]: {
//       paddingBottom: theme.spacing.unit * 2
//     }
// }));

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support"
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined"
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support"
    ],
    buttonText: "Get started",
    buttonVariant: "contained"
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support"
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined"
  }
];

function SearchPage(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Layout>
        {/* Hero unit */}
        <HeroContent>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            component="p"
          >
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default Material-UI
            components with little customization.
          </Typography>
          </HeroContent>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                //   className={classes.cardHeader}
                />
                <CardContent>
                  <CardPricing>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                    </CardPricing>
                  {tier.description.map((line) => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Layout>
      {/* Footer */}
      {/* End footer */}
    </React.Fragment>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SearchPage;
