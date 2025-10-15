import React from 'react'
import { Row, Col, Alert } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList({ users, onUserClick }) {
  if (users.length === 0) {
    return (
      <Alert variant="info">
        No users found matching your search criteria.
      </Alert>
    )
  }
  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {users.map((user) => (
        <Col key={user.id} className='md-6 lg-4 mb-4'>
          <UserCard user={user} onClick={() => onUserClick(user)} />
        </Col>
      ))}
    </Row>
  )

}

export default UserList
