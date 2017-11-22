import React from 'react'
import ArticleListItem from './ArticleListItem'
const contentful = require('contentful')

export default class ArticleList extends React.Component {

    constructor () {
        super()
        this.state = {articles: []}
    }

    componentDidMount () {
        const client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: 'anjlutb8dq3v',
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: '4bf9314dc5bdfbf380247aa3ab84d7da0e86d33a6089168eb32558d4f7096cda'
        })
        client.getEntries({content_type: 'post'}).then((response) => {
            this.setState({articles: response.items})
        })
    }
    render () {
        const articles = this.state.articles.map((article, i) => <ArticleListItem id={i} key={i} article={article}/>)
        return (
            <div className="article-wrapper">
                {articles}
            </div>
        )
    }
}
