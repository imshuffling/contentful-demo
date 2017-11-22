import React from 'react'
import PropTypes from 'prop-types';

class ArticleListItem extends React.Component {
    render () {

        const {article} = this.props

        return (
            <article className='post'>
                <h2>{article.fields.title}</h2>
                <p>{article.fields.content}</p>

                <p>{article.fields.author.fields.fullName}</p>
                <img alt="" src={article.fields.author.fields.avatar.fields.file.url} />

            </article>
        )
    }
}

ArticleListItem.propTypes = {
    article: PropTypes.object
}
export default ArticleListItem
