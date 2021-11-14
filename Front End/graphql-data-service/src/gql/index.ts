import { ApolloServer, IResolvers } from 'apollo-server-express';
import { typeDefs } from 'src/gql/schema';
import rootResolver from 'src/gql/resolvers';
import { ODMSource, GeoInfoProviderSource } from 'src/datasources';
import admin from 'firebase-admin';
import serviceAccount from 'src/creds/firebase-sa.json';

// Initialize firebase for auth
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// Hacky to get Apollo and Codegen to work together
const resolvers = rootResolver as IResolvers;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || '';

    if (!token) return null;

    // Verify token in firebase and get corresponding user id
    const uid = await admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => decodedToken.uid)
      .catch((error) => {
        console.log('Error retrieving uid', error);
        return null;
      });

    // Pass user id to context if valid
    return uid;
  },
  dataSources: () => ({
    odmSource: new ODMSource(),
    geoinfoproviderSource: new GeoInfoProviderSource(),
  }),
  // Remove these to disable playground in production
  playground: true,
  introspection: true,
});

export default apolloServer;
