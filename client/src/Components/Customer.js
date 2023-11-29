import React from 'react'
import { useEffect, useState } from 'react';
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
`

const Customer = () => {
  const [customers, setCustomers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await callApi();
        setCustomers(res);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // server.js에서 데이터를 올린 api/customers에서 가져옴
  const callApi = async () => {
    const response = await fetch('api/customers');
    const data = await response.json();
    return data;
  }
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
          {customers ? customers.map(it => (
            <TableRow>
              <TableCell>{it.id}</TableCell>
              <TableCell><img src={it.image} alt='profile' /></TableCell>
              <TableCell>{it.name}</TableCell>
              <TableCell>{it.birthday}</TableCell>
              <TableCell>{it.gender}</TableCell>
              <TableCell>{it.job}</TableCell>
            </TableRow>
          )): ""}
        </TableBody>
      </Table>
    </Div>
  )
}


export default Customer;