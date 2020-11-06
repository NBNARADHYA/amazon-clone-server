const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    products(mainCat: String!, subCat: String!): [Product!]!
  }

  type Product {
    crawl_timestamp: String
    product_id: String!
    product_name_source: String
    retailer: String
    product_category: String!
    product_brand: String
    product_name: String!
    product_price: String
    product_url: String
    product_description: String
    product_currency: String
    product_image_url: String
    product_tags: String
    product_contents: String
  }
`;

module.exports = typeDefs;
