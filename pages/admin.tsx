import { Box, Typography } from "@mui/material";

const AdminPage = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        margin: 4,
      }}
    >
      <Typography variant="h3" sx={{ margin: 8 }}>
        Welcome to the super secret Admin page 😨
      </Typography>

      <img
        className="main-image"
        src="https://i0.wp.com/blog.landot-avocats.net/wp-content/uploads/2017/12/20016.gif?fit=356%2C200&ssl=1"
        alt="asdf movieinternet"
      />

      <Typography variant="h4" sx={{ margin: 4 }}>
        Here is some top secret information: 👽
      </Typography>

      <img
        src="https://img.freepik.com/premium-vector/undercover-detective-top-secret-information-spy-private-investigator-searching-criminal-magnifying-glass-flat-vector-illustration-crime-mystery-concept-banner-landing-web-page_74855-23234.jpg"
        alt="Secret, psst"
      />
    </Box>
  );
};

export default AdminPage;
