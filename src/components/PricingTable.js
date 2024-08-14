import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function PricingTable() {
  return (
    <TableContainer className="rounded-lg mt-3">
      <Table>
        <TableHead sx={{ backgroundColor: '#6366f1' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>API</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>MODEL</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>PRICE PER 1K TOKENS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[
            { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
            { api: "OpenAI", model: "GPT-4", price: "$0.03" },
            { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
            { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" },
          ].map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: "white", py: 2, fontWeight: 550 }}>{row.api}</TableCell>
              <TableCell sx={{ color: "white", py: 2, fontWeight: 550 }}>{row.model}</TableCell>
              <TableCell sx={{ color: "white", py: 2, fontWeight: 550 }}>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PricingTable;
