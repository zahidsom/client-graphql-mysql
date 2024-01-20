import React from 'react'
// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetStudents {
    students {
      id
      name
    }
  }
`;

const DisplayStudents = () => {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.students.map(({id,name}) => (
    <div key={id}>
      <h3>{name}</h3>
    </div>  
    ));
  }

export default DisplayStudents
