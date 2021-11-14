import express from 'express';
import cors from 'cors';
import apolloServer from 'src/gql';
import config from 'src/config';

const app = express();
const path = '/graphql';

const setPort = (port: string): void => {
  app.set('port', parseInt(port));
};

const listen = (): void => {
  const port: number = app.get('port') || config.port;
  app.listen(port, () => {
    console.log(
      `The server is running and listening at http://localhost:${port}`
    );
  });
};

app.use(
  cors({
    origin: config.corsDomain,
    optionsSuccessStatus: 200,
  })
);

apolloServer.applyMiddleware({ app, path });

export default {
  getApp: (): express.Express => app,
  setPort,
  listen,
};
