import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import YouTube from "react-youtube";

const ImgMediaCard = ({ content, opts, onReady }) => {
  return (
    <Card>
      <CardActionArea>
        <img src={content.film.posterImage} alt={"Poster"} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {content.film.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.film.additional}
          </Typography>
          <YouTube videoId={content.film.youtubeId} opts={opts} onReady={onReady} />;
        </CardContent>
        <Rating name="hover-feedback" value={content.film.rating} />
      </CardActionArea>
    </Card>
  );
};

export default ImgMediaCard;
