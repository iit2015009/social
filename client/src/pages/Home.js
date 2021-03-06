import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Feeds from "../components/feeds/Feeds";
import Feed from "../components/feeds/Feed";

import { ChatBox } from "../components/chat/ChatBox";
import {
  Button,
  Text,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Flex,
} from "@chakra-ui/core";

import ReactAudioPlayer from "react-audio-player";

const Home = () => {
  return (
    <div id="main">
      <div id="left">
        <ReactAudioPlayer
          src="http://play.global.audio:80/nrj_low.ogg"
          autoPlay
          controls
        />
      </div>
      <div id="nav">
        <Link to="/">
          <Text color="gray.100" fontWeight="bold" fontSize="4xl">
            Social
          </Text>
        </Link>
        <Popover trigger="hover">
          <PopoverTrigger>
            <Button variant="solid">add post</Button>
          </PopoverTrigger>
          <PopoverContent zIndex={4} width={""}>
            <Flex w="400px" h="100px">
              heloo
            </Flex>
          </PopoverContent>
        </Popover>
      </div>
      <div id="feeds">
        <Routes>
          <Route path="/" element={<Feeds />} />
          <Route path="/:id" element={<Feed />} />
        </Routes>
      </div>
      <div id="right">
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
