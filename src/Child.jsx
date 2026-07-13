
// const Child =({name}) => {
//   console.log("👶 Child Rendered");
//   console.log(name);

//   return (
//     <div>
//       <h2>Child Component{Math.random()}</h2>
//     </div>
//   );
// };
// // 
// export default Child;

const Child = ({ name }) => {
  console.log("👶 Child Rendered");

  return (
    <div>
      <h2>Random: {Math.random()}</h2>
    </div>
  );
};

export default Child;