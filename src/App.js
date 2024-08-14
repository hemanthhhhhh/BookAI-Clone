import { Box, Card as MUICard, CardContent, Typography } from "@mui/material";
import PricingTable from "./components/PricingTable";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col items-center min-h-screen w-full font-sans px-4">
        <Box className="w-full max-w-4xl mx-auto mt-6">
          <MUICard sx={{ borderRadius: '8px', backgroundColor: '#1e293b' }}>
            <CardContent>
              <Typography variant="h5" color='#a5b4fc' fontWeight='bold' mt={6} mb={1}>
                API Pricing
              </Typography>
              <Typography variant="body" fontSize={18} color='white'>
                Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
              </Typography>
              <PricingTable />
              <Typography variant="h5" fontWeight='bold' color='#a5b4fc' mt={4} mb={1}>
                Token Estimation
              </Typography>
              <Typography variant="body" fontSize={18} color='white'>
                On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
              </Typography>
              <Typography variant="h5" fontWeight='bold' color='#a5b4fc' mt={4} mb={1}>
                Billing
              </Typography>
              <Typography variant="body" fontSize={18} color='white'>
                You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
              </Typography>
            </CardContent>
          </MUICard>
        </Box>
        <div className='flex flex-col items-center mt-20'>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
