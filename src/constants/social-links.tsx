import React from "react";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const socials = [
  {
    name: "GitHub",
    icon: <AiFillGithub className="social-image" />,
    url: "https://github.com/codekcv",
    color: "black",
  },
  {
    name: "YouTube",
    icon: <AiFillYoutube className="social-image" />,
    url: "www.youtube.com/channel/UCLMRLYuZFPXrPH3eaPnRAAw",
    color: "black",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin className="social-image" />,
    url: "https://www.linkedin.com/in/codekcv",
    color: "#0e76a8 ",
  },

  {
    name: "Twitter",
    icon: <AiFillTwitterCircle className="social-image" />,
    url: "https://twitter.com/codekcv",
    color: "#00acee",
  },
];

export default socials;
