const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Đường dẫn tới thư mục 'dist' chứa tệp bundle
const staticDir = path.resolve(__dirname, 'dist');

// Đưa vào sử dụng các tệp tĩnh trong thư mục 'dist'
app.use(express.static(staticDir));

// Trả về tệp index.html cho mọi yêu cầu
app.get('*', (req, res) => {
  res.sendFile(path.resolve(staticDir, 'index.html'));
});

// Khởi chạy máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
