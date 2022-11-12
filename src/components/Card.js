import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="src/img/placeholder.png"
        alt="placeholder"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Cool Restaurant
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">VIEW</Button>
        
      </CardActions>
    </Card>
  );
}