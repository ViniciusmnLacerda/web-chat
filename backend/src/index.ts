import app from './app';
require('dotenv').config()

const PORT = process.env.PORT

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;