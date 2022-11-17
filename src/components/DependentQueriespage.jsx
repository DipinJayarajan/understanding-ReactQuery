import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4004/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
 return axios.get(`http://localhost:4004/channels/${channelId}`)
}

export const DependentQueriespage = ({ email }) => {
  const { data: user, isError, error, isLoading } = useQuery(['user', email], () =>
    fetchUserByEmail(email)
  )
  const channelId = user?.data.channelId

  const { data : courses} = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId
  })
  
  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Error: {error.message}</div>
  }
  
  return <div>DependentQueriespage</div>

  
}

//user refers to the response returned by the query
//optonal chaining operator ?. is used to avoid undefined errors