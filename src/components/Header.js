import React,{useEffect} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from '@/styles/Home.module.css'





export default function Header(){


    useEffect(() => {
        let element = document.getElementById('head-contain');
        let elementContainer = document.getElementById('component-container');

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                if (element) element.classList.add("sticky-header");
                elementContainer.classList.add("added-sticky-header");
            } else {
                if (element) element.classList.remove("sticky-header");
                elementContainer.classList.remove("added-sticky-header");
                // }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
        // console.log(document && document.getElementById('myHeader'), 'document')
    }, []);
    return (
        <Grid container spacing={2} id="head-contain" className="header">
          <Grid item xs={12}>
        <h1>{process.env.NEXT_PUBLIC_USERNAME || "Tony Stark"}</h1>
        </Grid>
        <Grid item xs={12}>
            <h2>{process.env.NEXT_PUBLIC_DEPARTMENT || "Iron Man"}</h2>
        </Grid>
        </Grid>
    )
}