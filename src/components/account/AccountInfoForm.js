import React, { useContext } from "react";
import { useStyles } from "./styles";
import { User } from "../../Context";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useAlert } from "react-alert";

//function to cut back on amount of code written in Account Component
function InputForm(props) {
  const style = useStyles();
  const { hook, toEdit, setHook, label } = props;

  return (
    <TextField
      type="text"
      value={hook || ""}
      disabled={!toEdit}
      variant="outlined"
      label={label}
      className={!toEdit ? style.inputReadOnly : style.inputCanEdit}
      onChange={(e) => setHook(e.target.value)}
    />
  );
}

export default function AccountInfoForm(props) {
  const style = useStyles();
  const context = useContext(User);
  const alert = useAlert();

  const pushUpdateToServer = async () => {
    const data = {
      address: address,
      addressTwo: addressTwo,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      city: city,
      state: state,
      county: county,
      postalCode: postalCode,
    };
    const update = await updateAccount(data);
    serverResponse === 200
      ? alert.show("Account updated successfully")
      : alert.show("Something went wrong with your request, please try again");

    setServerResponse(200);
    setToEdit(false);
    return update;
  };

  const { toEdit, setToEdit } = props;

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    addressTwo,
    setAddressTwo,
    city,
    setCity,
    state,
    setState,
    county,
    // setCounty,
    postalCode,
    setPostalCode,
    logoutAccount,
    updateAccount,
    setServerResponse,
    serverResponse,
  } = context;

  return (
    <div>
      <Typography variant="h6" style={{ textDecoration: "underline" }}>
        Personal Information
      </Typography>
      <div style={{ textAlign: "left" }}>
        <Typography className={style.smallHeader}>Name</Typography>
        <div style={{ display: "inline-block" }}>
          <InputForm
            toEdit={toEdit}
            hook={firstName}
            setHook={setFirstName}
            label="first name"
          />
          <InputForm
            toEdit={toEdit}
            hook={lastName}
            setHook={setLastName}
            label="last name"
          />
        </div>
        <div style={{ display: "block" }}>
          <div className={style.contactDiv}>
            <Typography
              className={style.smallHeader}
              style={{ display: "inline" }}
            >
              Email
            </Typography>
            <InputForm
              toEdit={false}
              hook={email}
              setHook={setEmail}
              label="user@email.com"
            />
          </div>
          <Typography
            className={style.smallHeader}
            style={{ display: "inline" }}
          >
            phone
          </Typography>
          <InputForm
            toEdit={toEdit}
            hook={phone}
            setHook={setPhone}
            label="phone number"
          />
        </div>
        <Typography
          variant="h6"
          className={style.smallHeader}
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Shipping Address
        </Typography>
        <Typography>Street Address</Typography>
        <InputForm
          toEdit={toEdit}
          hook={address}
          setHook={setAddress}
          label="address one"
        />
        <InputForm
          toEdit={toEdit}
          hook={addressTwo}
          setHook={setAddressTwo}
          label="address two/ optional"
        />
        <Typography>City</Typography>
        <InputForm toEdit={toEdit} hook={city} setHook={setCity} label="city" />
        <Typography>State/Province/Region</Typography>
        <InputForm
          toEdit={toEdit}
          hook={state}
          setHook={setState}
          label="state"
        />
        {/* <Typography>County</Typography>
        <InputForm
          toEdit={toEdit}
          hook={county}
          setHook={setCounty}
          label="county"
        /> */}
        <Typography>Postal Code</Typography>
        <InputForm
          toEdit={toEdit}
          hook={postalCode}
          setHook={setPostalCode}
          label="5-digit postal code"
        />
        <Container>
          <Button
            className={style.accountBtn}
            onClick={() =>
              toEdit === false ? setToEdit(true) : pushUpdateToServer()
            }
          >
            {toEdit === false ? "Edit" : "Save"}
          </Button>
          <Button className={style.logoutBtn} onClick={logoutAccount}>
            Logout
          </Button>
        </Container>
      </div>
    </div>
  );
}
