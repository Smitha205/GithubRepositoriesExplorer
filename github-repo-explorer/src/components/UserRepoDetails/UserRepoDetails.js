import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { getUserRepoDetails } from "../../services";
import "./UserRepoDetails.css";
import { styles } from "./styles";

export default function UserRepoDetails({ repoUserInfo }) {

  const [repoDetail, setRepoDetail] = useState([{}]);

  useEffect(() => {
    getUserRepoDetails(repoUserInfo.login)
      .then((res) => {
        setRepoDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [repoUserInfo]);

  return (
    <div data-testid="user-repo-accordion" className="user-repo-details-main">
      {
        <Accordion sx={styles[0]}>
          <AccordionSummary
            sx={styles[1]}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography> {repoUserInfo.login} </Typography>
          </AccordionSummary>
          <AccordionDetails style={styles[2]}>
            {repoDetail.length === 0
              ? "No public repo"
              : repoDetail.map((item, key) => (
                  <div key={key} style={styles[3]}>
                    <div>
                      <Typography style={styles[4]}>
                        <strong>{item.name}</strong>
                      </Typography>
                      <Typography style={styles[4]}>{item.description}</Typography>
                    </div>
                    <div>
                      <Typography style={styles[5]}>{item.stargazers_count} &#9733;</Typography>
                    </div>
                  </div>
                ))}
          </AccordionDetails>
        </Accordion>
      }
    </div>
  );
}
