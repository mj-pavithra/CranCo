const LinkToProfile = (isOwner) => {
  if (isOwner === "") {
    return "/myprofile";
  } else if (isOwner === "no") {
    return "/user";
  }
  // Add an else condition or a default return value if needed
};

export default LinkToProfile;
