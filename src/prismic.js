import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = process.env.REACT_APP_PRISMIC_REPO_NAME;

export const client = prismic.createClient(repositoryName, {
    accessToken: process.env.REACT_APP_PRISMIC_ACCESS_TOKEN,
})