const url = "https://script.google.com/macros/s/AKfycbxkpNfqgFPjX720hY49GBezL8GsWqofJYl8XJpJktIaL-p-7BqRZ90t3P3rD1iKihU6/exec";
const payload = {
  type: "INSERT",
  table: "waitlist",
  record: {
    email: "testfromscript@example.com",
    user_type: "seeker",
    created_at: new Date().toISOString()
  }
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(payload)
})
.then(res => res.text())
.then(text => console.log("Response:", text))
.catch(err => console.error("Error:", err));
