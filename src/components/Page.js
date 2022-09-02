import React from "react";
import About from "./About";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { default as UserContextType2 } from "../store/users";

function Page() {
  return (
    <div className="page">
      <Header />
      <Content />
      <UserContextType2>
        <About />
      </UserContextType2>
      <Footer />
    </div>
  );
}

export default Page;
