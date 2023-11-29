import React from 'react'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  margin-top: 3px;
  overflow-x: auto;
  
  /* .table {
    min-width: 1080px;
  } */
`

export const Customer = ({customers}) => {
  return (
    <Div>
      <Table className='table'>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
          {customers.map(it => (
            <TableRow>
              <TableCell>{it.id}</TableCell>
              <TableCell><img src={it.image} alt='profile' /></TableCell>
              <TableCell>{it.name}</TableCell>
              <TableCell>{it.birthday}</TableCell>
              <TableCell>{it.gender}</TableCell>
              <TableCell>{it.job}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Div>
  )
}

export default Customer;