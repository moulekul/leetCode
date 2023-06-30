const f = (arr, target) => {
    let hm = {};
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let want = target - num;
      if (want in hm) {
        return [hm[want], i];
      } else {
        hm[num] = i;
      }
    }
  };
  
  module.exports = f;