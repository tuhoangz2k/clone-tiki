import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, descrease } from './counterSlice';
import styles from './styles.module.scss';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 35,
    padding: '0 30px',
  },
});

function CouterFeature(props) {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    const action = increase();
    dispatch(action);
  };
  const handleDecrease = () => {
    const action = descrease(12);
    dispatch(action);
  };
  return (
    <div className={styles.counter}>
      <h1>{counter}</h1>
      <div>
        <Button className={classes.root} onClick={handleIncrease}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDecrease}>
          Descrease
        </Button>
      </div>
    </div>
  );
}

export default CouterFeature;
