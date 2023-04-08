import React from 'react';
import { Box } from '@material-ui/core';
import PageBody from '../../../../components/Dashboard/PageBody';
import PageHeader from '../../../../components/Dashboard/PageHeader';
import { useStyles } from './extern.styles';
import { MyButton } from '../../../../components/Global';
import useClicked from '../../../../hooks/useClicked';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Extern = () => {
  const [onClicked] = useClicked();
  const classes = useStyles();
  return (
    <Box>
      <PageHeader title='Productores Externos'>
        <Box onClick={() => onClicked('/producers/addgrowers')}>
          <MyButton
            color='green'
            hover='#102c03'
            font='white'
            className={classes.button}
          >
            Agregar
          </MyButton>
        </Box>
      </PageHeader>
      <PageBody>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label='customized table'
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align='right'>Calories</StyledTableCell>
                <StyledTableCell align='right'>Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align='right'>
                  Protein&nbsp;(g)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component='th'
                    scope='row'
                  >
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.fat}</StyledTableCell>
                  <StyledTableCell align='right'>{row.carbs}</StyledTableCell>
                  <StyledTableCell align='right'>{row.protein}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageBody>
    </Box>
  );
};

export default Extern;
