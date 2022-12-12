import React from 'react'
import { Drawer,Tooltip, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
 import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import linksArray from '../../utils/NavLinks';
import styles from '../../styles/DrawerCom.module.css'

const DrawerComp = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <List>
          {linksArray.map((linksArray, index) => (
            <ListItemButton sx={{ width: "0" }}>
              <ListItemIcon>
                <ListItemText>{linksArray}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Tooltip title="Add" placement="right" sx={{display:"flex" , m:0,p:0} } className={styles.iconBtn}>
        <IconButton
          sx={{ display:"flex", width: "85%", m: 0 ,p:0}}
          onClick={() => setOpen(!open)}
          className={styles.iconBtn}
        >
          <MenuRoundedIcon  className={styles.menu} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default DrawerComp;
