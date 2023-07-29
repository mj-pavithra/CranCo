import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProfileCard = () => {
  return (
    <Card>
      {/* Profile cover photo in background */}
      <div
        style={{
          backgroundImage: "url(profile_cover_photo_url)",
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <CardHeader
        avatar={<Avatar src="profile_picture_url" alt="User Profile" />}
        title="User Name"
        subheader="Location"
      />

      <CardContent>
        {/* Update profile picture button */}
        <Button variant="contained">Update Profile Picture</Button>

        <Typography variant="body1">
          This is the content of the profile card. It can include any additional information about the user.
        </Typography>

        {/* Tiny images of friends profile pictures */}
        <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
          <Avatar src="friend_1_profile_picture_url" alt="Friend 1" />
          <Avatar src="friend_2_profile_picture_url" alt="Friend 2" />
          <Avatar src="friend_3_profile_picture_url" alt="Friend 3" />
          {/* Add more friend profile pictures here */}
        </div>

        {/* Add friend button */}
        <Button variant="contained" style={{ marginTop: "10px" }}>
          Add Friend
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
