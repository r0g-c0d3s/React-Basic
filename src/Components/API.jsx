import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function API() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/quotes")
      .then((res) => {
        console.log(res.data.quotes);
        setQuotes(res.data.quotes);
      })
      .catch((err) => {
        console.log(err, 22);
      });
  }, []);
  return (
    <div>
        <br />
        <br />
        <br />
        <br />
        {quotes.map((quote)=>{
            return(
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{quote.author}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {quote.id + " : "}{quote.quote}
        </AccordionDetails>
      </Accordion>
            )
        })}
        <br />
      
    </div>
  );
}
