import React from 'react'
import  { useState } from 'react';

function Card1(props) {

  const { id, title, url, description, caracteristique } = props.value;
  const [open, setOpen] = useState(false);
  return (
    <div class="card" style={{ width: '18rem' }}>
      <img src={url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        {/* <p class="card-text">{caracteristique}</p> */}
        <a href="#" class="btn btn-primary">SHOPING</a>
      </div>
    </div>
  )
}

export default Card1


// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// export default function MediaCard(props) {
//   const classes = useStyles();

//   const { id, title, url, description, caracteristique } = props.value;
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <>
//       <Card className={classes.root} onClick={handleOpen}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={url}
//             title={title}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {description}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         {/* <CardActions>
//            <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button> 

//         </CardActions> */}

//       </Card>
//       {/* <Model open={open} setOpen={setOpen}  val={caracteristique} /> */}

//       <Button variant="contained" color="primary" href="#contained-buttons">
//         J'ACHETE
//       </Button>
//     </>
//   );
// }
