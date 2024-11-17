import './App.css';
import Button from '@mui/material/Button';
import { TextField, Box, TableContainer, Table, TableRow, 
  TableHead, TableCell, TableBody, List, ListItem, ListItemText,
  Divider } from '@mui/material';
import React, { useEffect, useState } from "react";
function App() {
  const [high, setHigh] = useState();
  const [low, setLow] = useState();
const [range, setRange] = useState();
const [MPoint, setMPoint] = useState();
const [high1, setHigh1] = useState();
const [low1, setLow1] = useState();
const [high2, setHigh2] = useState();
const [low2, setLow2] = useState();
const [high3, setHigh3] = useState();
const [low3, setLow3] = useState();
const [high4, setHigh4] = useState();
const [low4, setLow4] = useState();

  return (
    <div className="App">
     
     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <TextField  id="standard-basic" label="High" onChange={(event) => {setHigh(event.target.value)}}/>
          <TextField id="standard-basic" label="Low" onChange={(event) => {calculateRangeMPoint (event.target.value)}} />

          <Button variant="contained" onClick={() => {calculateHighLow(); }}>
              Calculate
          </Button>
    </Box>

    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody >
            <TableRow key={1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right"  >High 4</TableCell>
              <TableCell align="left"scope="row"> { high4 } </TableCell>
            </TableRow>
            <TableRow key={2} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">High 3</TableCell>
              <TableCell align="left"scope="row"> { high3 } </TableCell>
            </TableRow>
            <TableRow key={3} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">High 2</TableCell>
              <TableCell align="left"scope="row"> { high2 } </TableCell>
            </TableRow>
            <TableRow key={4} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">High 1</TableCell>
              <TableCell align="left"scope="row"> { high1 } </TableCell>
            </TableRow>
            <TableRow key={5} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">High </TableCell>
              <TableCell align="left"scope="row"> { high } </TableCell>
            </TableRow>

            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">M Point </TableCell>
              <TableCell align="left"scope="row"> { MPoint } </TableCell>
            </TableRow>

            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">Low </TableCell>
              <TableCell align="left"scope="row"> { low } </TableCell>
            </TableRow>
            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">Low 1 </TableCell>
              <TableCell align="left"scope="row"> { low1 } </TableCell>
            </TableRow>
            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">Low 2 </TableCell>
              <TableCell align="left"scope="row"> { low2 } </TableCell>
            </TableRow>
            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">Low 3 </TableCell>
              <TableCell align="left"scope="row"> { low3 } </TableCell>
            </TableRow>
            <TableRow key={6} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell align="right">Low 4 </TableCell>
              <TableCell align="left"scope="row"> { low4 } </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );

  function calculateRangeMPoint(lowValue){
    setMPoint((parseInt(high) + parseInt(lowValue))/2);
    setRange((parseInt(high) - parseInt(lowValue))/2);
    setLow(lowValue)
  }
  // function calculate(){
  //   setMPoint((parseInt(high) + parseInt(low))/2);
  //   setRange((parseInt(high) - parseInt(low))/2);
  //   calculateHighLow();
  // }
  function calculateHighLow(){
    setHigh1( parseInt(high)  + (range * 1));
    setHigh2( parseInt(high)  + (range *2));
    setHigh3( parseInt(high)  + (range * 3));
    setHigh4( parseInt(high)  + (range * 4));
    setLow1( parseInt(low) - (range * 1));
    setLow2( parseInt(low) - (range * 2));
    setLow3( parseInt(low) - (range * 3));
    setLow4( parseInt(low) - (range * 4));
  }
}

export default App;
