import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UserTable from '../../../components/User/UserTable';

const User = () => {
  const [data, setData] = useState([]);
  // const [pagination, setPagination] = useState({
  //   current: 1,
  //   pageSize: 10
  // });
  // const [query, setQuery] = useState({params: pagination});

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/user');
      console.log(result);
      setData(result.data.data.list);
    };
    fetchData();
  }, []);

  // const handleTableChange = (pagination, filters, sorter) => {
  //   setQuery({
  //     params: {
  //       current: pagination.current,
  //       pageSize: pagination.pageSize
  //     }
  //   });
  // };

  return (
    <UserTable
      rows={data}
    />
  );
}

export default User;
