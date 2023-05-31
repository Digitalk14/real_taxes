const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    getTaxes: [Country!]!
    getCountryTaxes(id: ID!): Country!
    getCountriesTaxes: [CountryTax!]!
    getCurrency: Currency!
  }

  type Currency {
    name: String!
    value: Float!
  }

  type CountryTax {
    name: String!
    iconCode: String!
    taxRange: [TaxRange!]!
  }

  type TaxRange {
    top: Float!
    bottom: Float!
    taxValue: Float!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Country
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Country {
    id: ID!
    name: String!
    taxes: [Tax!]!
  }

  type Tax {
    id: ID!
    name: String!
    formula: String!
    taxRate: String!
    description: [TaxDescription!]!
  }

  type TaxDescription {
    title: String!
    list: [String!]!
    weight: Float!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The module's title"
    title: String!
    "The module's length in minutes"
    length: Int
    "The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript"
    content: String
    "The module's video url, for video-based modules"
    videoUrl: String
  }
`;

module.exports = typeDefs;
