import React from "react";
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom>
          SFAs Disputer
        </Typography>
        <Box sx={{ border: "1px solid grey", p: 2, mb: 4 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Resume
          </Typography>
        </Box>
        <Box sx={{ border: "1px solid grey", p: 2 }}>
          <Typography variant="h6" component="div" gutterBottom>
            Agreements
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Publisher</TableCell>
                  <TableCell>CID</TableCell>
                  <TableCell>Vesting</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Aquí puedes agregar las filas de la tabla */}
                <TableRow>
                  <TableCell>Example Publisher</TableCell>
                  <TableCell>Example CID</TableCell>
                  <TableCell>Example Vesting</TableCell>
                  <TableCell>Example Start Time</TableCell>
                  <TableCell>Example End Time</TableCell>
                  <TableCell>Example Status</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
