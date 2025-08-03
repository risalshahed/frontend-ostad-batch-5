import React from 'react'

export default async function Comments({ promise }) {
  // console.log('In comments', promise);

  const comments = await promise;

  // console.log(comments);

  return (
    <div className='mt-10'>
      <h2 className="font-semibold my-5 text-xl">
        Comments
      </h2>
      <ul>
        {
          comments?.map(comment=>
            <li key={comment.id}>
              {comment.body}
            </li>
          )
        }
      </ul>
    </div>
  )
}
