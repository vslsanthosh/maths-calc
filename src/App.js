import './App.css';
import Button from '@mui/material/Button';
import { TextField, Box, TableContainer, Table, TableRow, 
   TableCell, TableBody} from '@mui/material';
import React, {  useState } from "react";
import { Label } from '@mui/icons-material';
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
const [targetPrice, settargetPrice] = useState();
const [targetPrec, settargetPrec] = useState();

  return (
    <div className="App">
     
     <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <TextField  id="standard-basic" label="High" onChange={(event) => {setHigh(event.target.value)}}/>
          <TextField id="standard-basic" label="Low" onChange={(event) => {calculateRangeMPoint (event.target.value)}} />

          <Button variant="contained" onClick={() => {calculateHighLow(); }}>
              Calculate
          </Button>

          <TextField id="entryPrice" label="Target Price" onChange={(event) => {getTargetPrecentage (event.target.value)}} />
           Target Price : {targetPrice} 
           Target Percentage : {targetPrec}
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
    setMPoint(((parseFloat(high) + parseFloat(lowValue))/2).toFixed(5));
    setRange(((parseFloat(high) - parseFloat(lowValue))/2).toFixed(5));
    setLow(lowValue)
  }
  // function calculate(){
  //   setMPoint((parseInt(high) + parseInt(low))/2);
  //   setRange((parseInt(high) - parseInt(low))/2);
  //   calculateHighLow();
  // }
  function calculateHighLow(){
    setHigh1( (parseFloat(high)  + (range * 1)).toFixed(5));
    setHigh2( (parseFloat(high)  + (range *2)).toFixed(5));
    setHigh3( (parseFloat(high)  + (range * 3)).toFixed(5));
    setHigh4( (parseFloat(high)  + (range * 4)).toFixed(5));
    setLow1( (parseFloat(low)  - (range * 1)).toFixed(5));
    setLow2( (parseFloat(low)  - (range * 2)).toFixed(5));
    setLow3( (parseFloat(low)  - (range * 3)).toFixed(5));
    setLow4( (parseFloat(low)  - (range * 4)).toFixed(5));
  }

  function getTargetPrecentage(entryPrice){
    let difference = 0;
        let average = 0;
        let percentage =0;
        let targetPrice = 0;
    if(entryPrice > MPoint)
    {
      if(entryPrice > MPoint && entryPrice < high1)
      {
         difference = high1 - entryPrice;
         average = (high1 + entryPrice) /2;
         percentage = (difference / average) * 100;
         targetPrice = high1;
      }
      else if(entryPrice > high1 && entryPrice < high2)
        {
           difference = high2 - entryPrice;
           average = (high2 + entryPrice) /2;
           percentage = (difference / average) * 100;
           targetPrice = high2;
          
        } 
          else if(entryPrice > high2 && entryPrice < high3)
          {
             difference = high3 - entryPrice;
             average = (high3 + entryPrice) /2;
             percentage = (difference / average) * 100;
             targetPrice = high3;
          } 
          else if(entryPrice > high3 && entryPrice < high4)
          {
             difference = high4 - entryPrice;
             average = (high4 + entryPrice) /2;
             percentage = (difference / average) * 100;
             targetPrice = high4;
          }
    }
    else if(entryPrice < MPoint)
    {

      if(entryPrice < MPoint && entryPrice > low1)
      {
         difference = entryPrice - low1;
         average = (low1 + entryPrice) /2;
         percentage = (difference / average) * 100;
         targetPrice = low1;
      }
      else if(entryPrice < low1 && entryPrice > low2)
        {
           difference = entryPrice - low2;
           average = (low2 + entryPrice) /2;
           percentage = (difference / average) * 100;
           targetPrice = low2;
    }
    else if(entryPrice < low2 && entryPrice > low3)
    {
       difference = entryPrice - low3;
       average = (low3 + entryPrice) /2;
       percentage = (difference / average) * 100;
       targetPrice = low3;
    }
    else if(entryPrice < low3 && entryPrice > low4)
    {
       difference = entryPrice - low4;
       average = (low4 + entryPrice) /2;
       percentage = (difference / average) * 100;
       targetPrice = low4;
    }
    }
    settargetPrice(targetPrice);
    settargetPrec(percentage);
  }
}

export default App;
