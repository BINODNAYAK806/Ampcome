import React from 'react'
import styles from "../css/Home.module.css";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className={styles.maindiv}>
        <div className={styles.imgd}>
            <img className={styles.img} src="https://www.shutterstock.com/image-vector/ambulance-doctor-help-injured-patient-600w-1676655403.jpg" alt="" />
        </div>

        <div className={styles.imgd}>
            
            <div className={styles.fromdiv}>
            <h2>sign-in to your account</h2>
            <Stack spacing={2} direction="column">

      <TextField className={styles.but1} id="outlined-basic" label="Username" variant="outlined" />
      <TextField className={styles.but1} id="outlined-basic" label="Password" variant="outlined" />
      {/* <TextField className={styles.but1}id="outlined-basic" label="Outlined" variant="outlined" /> */}
      
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={10}>Select Unit Name</MenuItem>
          <MenuItem value={20}>UNIT</MenuItem>
          <MenuItem value={30}>KG</MenuItem>
        </Select>
        <Button className={styles.but1} variant="contained"><Link to="/Appointments">HOME</Link></Button>
      </Stack>

      {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </div>

        </div>

    </div>
  )
}
