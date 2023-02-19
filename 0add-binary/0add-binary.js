/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
//     const ml = Math.max(a.length, b.length);
//     if(ml>a.length) a = new Array(ml-a.length+1).join('0')+a;
//     if(ml>b.length) b = new Array(ml-b.length+1).join('0')+b;
//     let c = null;
//     let result = '';
    
//     for(let i=ml-1;i>=0;i--){
//         if(c){
//             if(a[i]==='0'&&b[i]==='0'){
//                 result='1'+result;
//                 c = null;
//             }else if((a[i]==='1'&&b[i]==='0')||(a[i]==='0'&&b[i]==='1')){
//                 result='0'+result;
//                 c = 1;
//             }else{
//                 result='1'+result;
//                 c=1;
//             }
//         }else{
//             if(a[i]==='0'&&b[i]==='0'){
//                 result='0'+result;
//                 c = null;
//             }else if((a[i]==='1'&&b[i]==='0')||(a[i]==='0'&&b[i]==='1')){
//                 result='1'+result;
//                 c = null;
//             }else{
//                 result='0'+result;
//                 c=1;
//             }
//         }
//     }
//     return c?'1'+result:result;
    
//another way
  // let carry = 0;
  // let result = '';
  // let i = a.length - 1;
  // let j = b.length - 1;

//   while (i >= 0 || j >= 0 || carry > 0) {
//     const sum = parseInt(a[i] || 0) + parseInt(b[j] || 0) + carry;
//     result = (sum % 2) + result;
//     carry = Math.floor(sum / 2);
//     i--;
//     j--;
//   }

//   return result;
    
//bitwise xor ,and , or operation solution
//   while (i >= 0 || j >= 0 || carry > 0) {
//     const sum = ((a[i] === '1') ? 1 : 0) ^ ((b[j] === '1') ? 1 : 0) ^ carry;
//     result = sum + result;
//     carry = ((a[i] === '1') & (b[j] === '1')) | ((a[i] === '1') & carry) | ((b[j] === '1') & carry);
//     i--;
//     j--;
//   }

//   return result;

// easyest way
    return (BigInt("0b"+a)+BigInt("0b"+b)).toString(2);
};