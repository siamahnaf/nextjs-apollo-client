import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:3005/v1/api/pdf",
    documents: ["src/Urql/**/**/*.ts"],
    ignoreNoDocuments: true,
    watch: true,
    generates: {
        "./src/Urql/gql/": {
            preset: "client",
            plugins: [],
            config: {
                scalars: {
                    DateTime: "Date"
                }
            }
        }
    }
};

export default config;