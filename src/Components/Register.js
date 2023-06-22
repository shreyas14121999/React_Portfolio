import React from "react";
// import Styled from "./Styled-components";

export default function Register(props) {

    // let btnStyle = {
    //     backgroundColor : "green",
    //     color : "white",

    // };

    let btnText , passBoxType;
    let btnClasses = [ "btn" , "m-1"];

    if(props.showPass === true){
        // btnStyle.backgroundColor = "red";
        btnText = "Hide Password";
        passBoxType = "text";
        btnClasses.push("btn-danger");
    }else{
        btnText = "Show Password";
        passBoxType = "password";
        btnClasses.push("btn-primary");
    }


    // const StyleRegisterContainer = Styled.button`
    // display : block;
    // padding : 10px 5px;
    // backgroundColor : orange ;
    // boder : none;
    // color : white ;
    
    // width : 600px ;

    // ;


  return (
    <div className="container card p-3 mt-2 register-container">

      <h1 className="text-center">Register Form</h1>

      <form onSubmit={props.submit}>
        <div className="form-group">
          <lable htmlfor=" ">Name :</lable>
          <input type="text" name="name" required className="form-control"></input>
        </div>

        <div className="form-group">
          <lable htmlfor=" ">Email :</lable>
          <input type="email" name="email" className="form-control"></input>
        </div>

        <div className="form-group">
          <lable htmlfor=" ">Password :</lable>
          <input
            type={passBoxType}
            name="password"
            required
            className="form-control"
          ></input>
        </div>

        <button className="btn btn-primary m-2">Register</button>

        <button className={btnClasses.join( " " )} type="button" 
        onClick={props.click}>Show Password
        </button>

        {/* {<StyledButton type = "button" >Login With Google</StyledButton> } */}

      </form>
    </div>
  );
}
