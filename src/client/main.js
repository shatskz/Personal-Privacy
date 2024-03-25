"use strict";

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { Header } from "./components/header.js";
import { Landing } from "./components/landing.js";

/***
 * Main application entry point
 * @returns {JSX.Element}
 * @constructor
 */
const MyApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/results/" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = createRoot(document.getElementById("mainDiv"));
root.render(<MyApp />);
            