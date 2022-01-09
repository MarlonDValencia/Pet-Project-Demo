import React from 'react'

export const OwnAnswer = ({ answer }) => (
  <aside className="answer">
    <p>{answer.answer}</p>
    {userId && <Link to={"/answer/" + id} className="button right">
        Delete
      </Link>}
  </aside>
)
