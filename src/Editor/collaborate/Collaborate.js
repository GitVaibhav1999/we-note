import React from "react";
import {
  Button,
  IconButton,
  makeStyles,
  OutlinedInput,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import {
  checkValidRequest,
  sendCollaborateRequest,
} from "../../DBCalls/firestoreDB";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
  },
  enterUser: {
    fontSize: "100%",
    backgroundColor: "lightpink",
    width: "100%",
    height: "5vh",
    "&:hover": {
      backgroundColor: "#FF6B6B",
      border: "1px solid black",
    },
  },
  showUser: {
    display: "block",
    border: "1px solid #8a795d",
    width: "100%",
    minWidth: "14vw",
    height: "50vh",
    marginTop: "1rem",
  },
  text: {
    padding: "0.5em 1em",
    fontSize: "1.3em",
  },
  done: {
    color: "#FF6B6B",
    fontSize: "2rem",
    backgroundColor: "lighpink",
    border: "1px solid #FF6B6B",
    marginLeft: "0.5em",
    marginBottom: "0.5rem",
  },
  input: {
    width: "80%",
    color: "grey",
    fontSize: "1.3rem",
  },
}));

function Collaborate(params) {
  const classes = useStyles();

  const CID = params.CID;

  const [clicked, setClicked] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState();

  const handleClick = () => {
    setClicked(true);
  };

  const handleInputChange = (eve) => {
    setEmailValue(eve.target.value);
  };

  // React.useEffect(() => console.log(emailValue), [emailValue]);

  const handleDone = () => {
    console.log(CID);
    if (emailValue == undefined) {
      console.log("email cannot be empty");
      return;
    }
    checkValidRequest(emailValue).then((res) => {
      res == true
        ? sendCollaborateRequest(CID, emailValue)
        : console.log("user not registered");
    });

    setClicked(false);
  };

  return (
    <div className={classes.root}>
      <div style={{ width: "100%" }}>
        {clicked == false ? (
          <Button
            onClick={handleClick}
            className={classes.enterUser}
            variant="outlined"
          >
            Collaborate
          </Button>
        ) : (
          <div>
            <OutlinedInput
              value={emailValue}
              onChange={handleInputChange}
              className={classes.input}
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              labelWidth={0}
              placeholder="Enter guest email"
            />
            <IconButton onClick={handleDone} className={classes.done}>
              <DoneIcon />
            </IconButton>
          </div>
        )}
      </div>
      <div className={classes.showUser}>
        <p className={classes.text}>Shared with ...</p>
      </div>
      <div></div>
    </div>
  );
}

export default Collaborate;
