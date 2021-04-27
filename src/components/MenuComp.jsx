import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';




const useStyle = makeStyles({
  
   hambicon: {
    alignItems: "flex-end",
    backgroundColor: "#f0eeee",
    color: "#bc865c",
    stroke: "#bc865c",
    fontSize: "90px",
    position: "absolute",
    right: "10px",
    top: "10px",
    padding: "10px",
    borderRadius: "50%",
    border: "1px solid #f0eeee",
    borderColor: "#f0eeee",
    '&:hover': {
      backgroundColor: "#bc865c",
      color: "#f0eeee",
      stroke: "#f0eeee",
      border: "1px solid #f0eeee",
    },
    /*'@media (min-width: 50em)': { 
      fontSize: "100px",
    }*/
    
  },
});



function MenuComp() {
  const classes = useStyle();
  
  return <MenuIcon className={classes.hambicon}></MenuIcon>;

}
export default MenuComp