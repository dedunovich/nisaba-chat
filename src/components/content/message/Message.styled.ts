import { Box, styled } from "@mui/material";

export const SentMessage = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: "#FFF",
  color: "#000",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  marginLeft: "auto",
  marginBottom: theme.spacing(1),
  width: 'fit-content',
  maxWidth: '40%',
}));

export const ReceivedMessage = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  backgroundColor: theme.palette.divider,
  color: theme.palette.secondary.contrastText,
  padding: theme.spacing(3),
  borderRadius: theme.spacing(3),
  marginRight: "auto",
  marginBottom: theme.spacing(1),
  width: 'fit-content',
  maxWidth: '40%'
}));
