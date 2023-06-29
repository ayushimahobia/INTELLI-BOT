 import React from 'react'
 import {} from '@mui/icons-material/DescriptionRounded'
 import {Box,Typography,Card,Stack} from '@mui/material'
 import { useNavigate } from 'react-router-dom'
 import  DescriptionRounded  from '@mui/icons-material/DescriptionRounded'
 import  FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined'
 import  ChatRounded from '@mui/icons-material/ChatRounded'
 import Card2 from './card.js';

const Homepage = () =>{
  const navigate = useNavigate();
  return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Box p={2}>
        <Typography color = {'cyan'} variant='h3' mb={2} frontWeight="bold" display={'flex'}>
          Text Generation
        </Typography>
        <Card2 onClick={() =>navigate("/summary")} icon={2} title ={"TEXT SUMMARY"} desc = {"Summarize Long Text Into Short sentence"}/>
      </Box>
      <Box p={2}>
        <Typography color = {'cyan'} variant='h3' mb={2} frontWeight="bold">
          Paragraph Generation
        </Typography>
        <Card2 onClick={() =>navigate("/paragraph")} icon={1} title ={"Paragraph"} desc = {"Generate Paragraph with words"}/>
      </Box>
      <Box p={2}>
        <Typography  color = {'cyan'} variant='h3' mb={2} frontWeight="bold">
        AI Chat-Bot
        </Typography>
        <Card2 onClick={() =>navigate("/chatbot")} icon={1} title ={"Chat-Bot"} desc = {"Chat with AI ChatBot"}/>
      </Box>

      <Box p={2}>
        <Typography color = {'cyan'}  variant='h3' mb={2} frontWeight="bold">
         Javascript Converter
        </Typography>
        <Card2 onClick={() =>navigate("/js-converter")} icon={1} title ={"Js-COnverter"} desc = {"Translate any code to javascript code"}/>
      </Box>

      <Box p={2}>
        <Typography color = {'cyan'} variant='h3' mb={2} frontWeight="bold">
       AI SCIFI Images
        </Typography>
        <Card2 onClick={() =>navigate("/scifi-image")} icon={1} title ={"Scifi-Images"} desc = {"Generate Scifi Images"}/>
      </Box>
      
    </Box>
    </>
  );
}
 export default Homepage;