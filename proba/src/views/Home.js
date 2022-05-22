import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";
import Thead from "../components/Table/Thead";
import TestC from "../components/TestC/TestC";

const Home = (props) => { 

    // const [count, setCount] = useState(0)

    // const add = ()=> {
    //     setCount((prevCount) => prevCount + 1) 
    //     setCount((prevCount) => prevCount + 1)
    // }

    // useEffect(() => {
    //   console.log("use effect")
    // }, [count])

    let data1;
    const [data, setData] = useState([])


    useEffect(() => {
        requestData();
    },[]);

    const requestData = async () => {
        const response = await fetch ('https://myjson.dit.upm.es/api/bins/4ddl');
        const backendData = await response.json();

        data1 = backendData.map((element) => ({
            id: `${element.id}`,
            number:`${element.number}`,
            name:`${element.name}`,
            position:`${element.position}`,
            birthday: dateSyntax(element.birthday),
            age:(new Date().getFullYear()) - element.birthday.slice(-4),
            email:`${element.email}`,
            roles:`${element.roles[0].role}`,
            ageOrder: Number(new Date(dateSyntax(element.birthday).split('.').reverse().join('-')))
        }));

        setData(data1);
        console.log(data);
    }

    console.log(data[0]);

    

    const dateSyntax = (date) => {
        const day = date.slice(0,2);
        const month = date.slice(2,-4).length === 1 ? '0' + date.slice(2,-4) : date.slice(2,-4);
        const year = date.slice(-4);
        return [day, month, year].join('.');
    }
    
    

   return (
        // <>
        // <Button onClick={add}>
        //     <div>{ count }</div>
        // </Button>
        // <TestC />
        // </>
        <>
        {
        data && <Table data={data} />
        }
        </>
        // <table>
        //     <thead>
        //         <Thead />
        //     </thead>
        //     <tbody>
        //     {data && data.map((element) => {
        //         return<Table 
        //         id={element.id}
        //         key={element.id}
        //         number={element.number}
        //         name={element.name}
        //         position={element.position}
        //         birthday={element.birthday}
        //         age={element.age}
        //         email={element.email}
        //         roles={element.roles}
        //         ageOrder={element.ageOrder}
        //         />
        //     })}
        //     </tbody>
        // </table>


        // <Table 
        //     id={data[1].id}
        //     number={data[1].number}
        //     name={data[1].name}
        //     position={data[1].position}
        //     birthday={data[1].birthday}
        //     age={data[1].age}
        //     email={data[1].email}
        //     roles={data[1].roles}
        //     ageOrder={data[1].ageOrder}
        
        // />

    )
}

export default Home;