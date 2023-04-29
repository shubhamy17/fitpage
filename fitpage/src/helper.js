import axios from "axios";
export const groupBy = function(xs, key) {
  try {
    return xs?.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  } catch (err) {
    console.log(err);
    return null;
  }
};
export const getStockData=()=>{
   return  axios.get('http://localhost:5000/data')
  }