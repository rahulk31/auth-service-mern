import app from './app';
import { Config } from './config';

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
