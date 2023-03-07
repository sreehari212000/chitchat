import { Card, CardContent, Typography } from '@mui/material'
import React, {forwardRef} from 'react'
import "../css/message.css"

const Message = forwardRef(({message, username}, ref) => {
  const isUser = username === message.username
  return (
    <div ref={ref} className={`message ${isUser && 'message-user'}`}>
      <Card className={isUser ? 'user-messagecard': 'guest-messagecard'}>
        <CardContent>
          <Typography
            variant='h5'
            component='h2'
          >
            {!isUser && `${message.username || 'Unknown User'} :` } {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message