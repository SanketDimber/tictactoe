import { Box, Button, Table, Typography, styled } from "@mui/material";
import SquareSharpIcon from '@mui/icons-material/SquareSharp';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useState } from "react";
import './Table.css';

const Tictactoe = () => { 

    const [data,setData] = useState(Array(9).fill(''));
    const [move,setMove] = useState('X');

   
    
    const click = (n) => {
        let square = [...data];

        if(data[n] !== '') {
            alert("Already Filled"); 
            return
        }

        square[n] = move;
        setData(square);
        if(move === 'X') {
            setMove('O');
        }else{
            setMove('X');
        }
        console.log("CLICK ",n);
        
       ;

        if(checkWin(square)){ 
                    
                    square.fill('');
                    setData(square);
                    alert("winner");

        }
        if(checkDraw(square)) {
            alert("Draw");
            square.fill('');
            setData(square);
        }
      
    }
    const checkWin = (data) => {

        const conditions = [
            [0,1,2],
            [3,4,5],   
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let flag = false;
        conditions.forEach(ele => 
        {

            if(data[ele[0]] !== '' && data[ele[1]] !== '' && data[ele[2]] !== ''){
            if(data[ele[0]] === data[ele[1]] && data[ele[1]] === data[ele[2]]){

                flag = true;
                

            }}
        });
        console.log(flag); 
        return flag;
    }
    const checkDraw = (data) => {

        console.log("In check draw");
        let count = 0;
        data.forEach(ele => 
            {
                if(ele !== '')
                    count++;
            });
            if(count >= 9) {
                return true;
            }else{
                return false;
            } 
    }
     
    return (
        <>
        <div className="block">
 <table>
    <tr>
        <td onClick={() => click(0)}>{data[0]}</td>
        <td onClick={() => click(1)}>{data[1]}</td>
        <td onClick={() => click(2)}>{data[2]}</td>
    </tr>
    <tr>
        <td onClick={() => click(3)}>{data[3]}</td>
        <td onClick={() => click(4)}>{data[4]}</td>
        <td onClick={() => click(5)}>{data[5]}</td>
    </tr>
    <tr>
        <td onClick={() => click(6)}>{data[6]}</td>
        <td onClick={() => click(7)}>{data[7]}</td>
        <td onClick={() => click(8)}>{data[8]}</td>
    </tr>
 </table>

 </div>
 </>
    );
};

export default Tictactoe;
