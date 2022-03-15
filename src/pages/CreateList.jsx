import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
  Grid,
  TextField,
  Typography,
  Button,
  IconButton,
  Tooltip,
  InputAdornment,
} from '@mui/material';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { LineComponent } from '../components';

const CreateList = () => {
  // problem:
  // create system to creaet new line items dynamically

  // solutions presented here:
  // const [qty, setQty] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [amt, setAmt] = useState(0);

  // const handleQtyChange = (e) => {
  //   setQty(e.target.value);
  // };

  // const handlePriceChange = (e) => {
  //   setPrice(e.target.value);
  // };

  // const itemsArray = [
  //   {
  //     id: '101',
  //     name: 'Pool inspection',
  //     description: 'We check your pool',
  //     qty: 1,
  //     price: 121,
  //   },
  //   {
  //     id: '102',
  //     name: 'Pool reinspection',
  //     description: 'We check your pool again',
  //     qty: 1,
  //     price: 132,
  //   },
  // ];

  // empty

  // const itemsArray = [
  //   {
  //     id: '',
  //     name: '',
  //     description: '',
  //     qty: 0,
  //     price: 0,
  //   },
  // ];

  // state solution

  // cost vs sales price toggle

  const [showCost, setShowCost] = useState(false);

  const [itemsArray, setItemsArray] = useState([
    {
      id: uuid(),
      name: 'Test product',
      description: 'this is a demo product',
      qty: 1,
      price: 312,
      rrp: 300,
      cost: 100,
    },
  ]);

  const handleAddNewLine = () => {
    setItemsArray([
      ...itemsArray,
      {
        id: uuid(),
        name: 'Test product',
        description: 'this is a demo product',
        qty: 1,
        price: 312,
        rrp: 300,
        cost: 100,
      },
    ]);
    // console.log(itemsArray);
  };

  const handleDeleteLineItem = (id) => {
    if (id) {
      // console.log(id);
      let newItems = itemsArray.filter((item) => item.id !== id);
      setItemsArray(newItems);
      // console.log(itemsArray);
    }
  };

  const handleTogglePrice = () => {
    setShowCost(!showCost);
  };

  // const handlePriceChange = () => {

  // }

  const itemHeaders = (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          Items
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          {showCost ? 'Recommended Price' : 'Description'}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          Quantity
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          {showCost ? 'Cost price' : 'Price'}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
          Amount
        </Typography>
      </Grid>
    </Grid>
  );

  const itemList = (
    <>
      {itemsArray.map((lineItem) => (
        <Grid
          container
          spacing={2}
          key={lineItem?.id}
          sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}
        >
          {/* {console.log(lineItem?.id)} */}
          <Grid item xs={3}>
            <TextField
              // value={selectedItem ? selectedItem.description : ''}
              value={lineItem.name}
              // onChange={handleDescriptionChange}
              fullWidth
              InputProps={{
                style: {
                  height: '48px',
                  borderRadius: '8px',
                  paddingLeft: '16px',
                },
                // readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              // value={selectedItem ? selectedItem.description : ''}
              value={!showCost ? lineItem.description : lineItem.rrp}
              // onChange={handleDescriptionChange}
              fullWidth
              InputProps={{
                style: {
                  height: '48px',
                  borderRadius: '8px',
                  paddingLeft: '16px',
                },
                // readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              // value={selectedItem ? selectedItem.description : ''}
              value={lineItem.qty}
              // onChange={handleQtyChange}
              fullWidth
              InputProps={{
                style: {
                  height: '48px',
                  borderRadius: '8px',
                  paddingLeft: '16px',
                },
                // readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              // value={selectedItem ? selectedItem.description : ''}
              value={!showCost ? lineItem.price : lineItem.cost}
              // onChange={handleDescriptionChange}
              fullWidth
              InputProps={{
                style: {
                  height: '48px',
                  borderRadius: '8px',
                  paddingLeft: '16px',
                },
                endAdornment: (
                  <Tooltip title={!showCost ? 'Show cost' : 'Hide cost'}>
                    <InputAdornment
                      position="end"
                      onClick={handleTogglePrice}
                      sx={{ cursor: 'pointer' }}
                    >
                      {showCost ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </InputAdornment>
                  </Tooltip>
                ),
                // readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item md={10}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>
                  $ {lineItem.qty * lineItem.price || '-'}
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Tooltip title="Remove item">
                  <IconButton
                    sx={{ justifyContent: 'flex-end' }}
                    onClick={() => handleDeleteLineItem(lineItem?.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );

  const addItemBtn = (
    <Button sx={{ textTransform: 'none' }} onClick={handleAddNewLine}>
      Add item
    </Button>
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
          Shopping list
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LineComponent />
      </Grid>
      <Grid item xs={12}>
        {itemHeaders}
      </Grid>
      <Grid item xs={12}>
        {itemList}
      </Grid>
      <Grid item xs={12}>
        {addItemBtn}
      </Grid>
    </Grid>
  );
};

export default CreateList;
