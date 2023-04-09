import React, { useState } from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';
import { useStyles } from './extern.styles';
import { MyButton } from '../../../../components/Global';
import useClicked from '../../../../hooks/useClicked';
import AddGrowersSeedsers from '../AddGrowersSeedsers';

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from '@material-ui/core';
import useTable from '../../../../hooks/useTable/index';
import * as employeeService from '../../../../services/employeeService';
import Controls from '../../../../components/Global/controls/Controls';
import { Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../../../components/Global/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Productor' },
  { id: 'actions', label: 'Actions', disableSorting: true },
];
const Extern = () => {
  const [onClicked] = useClicked();
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == '') return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <Box>
      <PageHeader
        title='Productores Externos'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />

      <PageBody>
        <Paper className={classes.pageContent}>
          <Toolbar>
            <Controls.Input
              label='Buscar'
              className={classes.searchInput}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search />
                  </InputAdornment>
                ),
              }}
              onChange={handleSearch}
            />
            <Controls.Button
              text='Agregar'
              variant='outlined'
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
            />
          </Toolbar>
          <TblContainer>
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.fullName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>{item.department}</TableCell>
                  <TableCell>
                    <Controls.ActionButton
                      color='primary'
                      onClick={() => {
                        openInPopup(item);
                      }}
                    >
                      <EditOutlinedIcon fontSize='small' />
                    </Controls.ActionButton>
                    <Controls.ActionButton color='secondary'>
                      <CloseIcon fontSize='small' />
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TblContainer>
          <TblPagination />
        </Paper>
        <Popup
          title='Registro'
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
        >
          <AddGrowersSeedsers
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
          />
        </Popup>
      </PageBody>
    </Box>
  );
};

export default Extern;
