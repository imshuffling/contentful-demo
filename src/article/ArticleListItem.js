import React from 'react'
import PropTypes from 'prop-types';

class ArticleListItem extends React.Component {
    render () {

        const {article} = this.props

        console.log({article})

        return (
            <article className='post'>
                <div className="article-header" style={{backgroundImage: 'url(' + article.fields.featureImage.fields.file.url + '?w=1200' +')'}}>
                    <h2>{article.fields.title}</h2>
                    <p className="date">{article.fields.publishDate}</p>
                </div>
                <div className="author-info">
                    <div className="author-info-image">
                        <img alt={article.fields.author.fields.avatar.fields.title} src={article.fields.author.fields.avatar.fields.file.url + '?w=100&h=100'} />
                    </div>
                    <div className="author-info-text">
                        <h3>{article.fields.author.fields.fullName}</h3>
                        <p>{article.fields.author.fields.bio}</p>
                    </div>
                </div>
                <p>{article.fields.content}</p>
            </article>
        )
    }
}

ArticleListItem.propTypes = {
    article: PropTypes.object
}
export default ArticleListItem
