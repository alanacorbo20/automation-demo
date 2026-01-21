const express = require("express");
const app = express();
app.use(express.json());

app.post("/order", (req, res) => {
  const { name, email, amount } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Missing data" });
  }

  console.log("Order received:", req.body);
  console.log("Payment processed for:", amount);

  res.json({ status: "success", message: "Order processed" });
});

app.listen(3000, () => console.log("Server running"));
