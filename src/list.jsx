// function ListsPoints2(props)
// {
//     const mydata = props.myvalue;
//     const rl = mydata.map((listvalue) =>{
//           console.log("done")
//           console.log(listvalue)
//           return <li>{listvalue}</li>
//     });

//     return <div className='container'>
//         <ul>{rl}</ul>
//     </div>
// }
// export default ListsPoints2






function MyList(props){
    const listItem = props.myvalue.map((listvalue,index) =>
    <ListKey Keys = {index} item = {listvalue}/>
);
return(
    <div>
        <h2>Correct Key Useage Example</h2>
        <ul>
            {listItem}
        </ul>
    </div>
);
}
export default MyList
// mydata=[100,200,300,400]

// function List()
// {
//     // const mydata = mydata.myvalue;
//     const rl = mydata.map((listvalue) =>{
//           console.log("done")
//           console.log(listvalue)
//           return <li>{listvalue}</li>
//     });

//     return <div className='container'>
//         <ul>{rl}</ul>
//     </div>
// }
// export default List
