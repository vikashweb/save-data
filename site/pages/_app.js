import React from 'react';
import Head from 'next/head'
import '../style/globle.css';



import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';



    const MyApp = ({ Component, pageProps }) => {
        const apolloClient = useApollo(pageProps.initialApolloState);

    return(
     
       <ApolloProvider client={apolloClient}>
        <Head >
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"/>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"/>
        </Head>
        <Layout>
        <Component {...pageProps}/>
        </Layout>
        </ApolloProvider>
    )
    }

export default MyApp;