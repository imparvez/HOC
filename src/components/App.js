import React from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { Route } from 'react-router-dom'

export const App = () => {
    return (
        <div>
            <Route path='/post' component={CommentBox} />
            <Route path='/' exact component={CommentList} />
        </div>
    )
}
