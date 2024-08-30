export async function POST(request) {
    const data = await request.json();
    console.log(data);
  
    const amount = data.amount
    const rate = parseFloat(process.env.VAT_RATE);
    const vat = Math.round(amount * rate) * 100 / 100;
  
  
    return Response.json({
      rate,
      amount,
      vat,
    });
  
  }