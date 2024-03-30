"use strict";

import React from "react";
import md5 from "md5";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const BodyContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f9fa;
`;

const NavLeft = styled.div`
  flex: 1;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const NavLink = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: #000;
`;

// /**
//  * @return {string}
//  */
// export function GravHash(email, size) {
//   let hash = email && email.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
//   hash = hash && hash.toLowerCase();
//   hash = hash && md5(hash);
//   return `https://www.gravatar.com/avatar/${hash}?size=${size}`;
// }

export const Header = () => (
  <div>
    <BodyContainer>
      <Navbar>
        <NavLeft>
          <h2>Personal Privacy</h2>
        </NavLeft>
        {/* <NavRight> */}
          {/* <Link to="/login">Log In</Link> {/* ***Have to change these links depending if user is signed in or not */}
          {/* <div>&nbsp;&nbsp;</div> Adds some space between the links */}
          {/* <Link to="/register">Register</Link> */}
        {/* </NavRight> */}
      </Navbar>
    </BodyContainer>
  </div>
);
