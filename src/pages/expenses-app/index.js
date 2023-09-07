import { Button, Form, Input , Table  } from 'antd';
import { useEffect, useState } from 'react';




export default function Expense(){

const [amount , setAmpount] = useState([])
const [type , setType] = useState(undefined)
const [total , setTotal] = useState({
    income : 0 ,
    expense : 0 ,
    profit_loss : 0
})

useEffect(()=>{
    if(amount.length){
        let income = 0
        let expense = 0
        amount.forEach((data)=>{
            if(data.type === 'Income'){
                income+=parseInt(data.amount)
            }else{
                expense+=parseInt(data.amount)
            }
        })
        setTotal({income , expense , profit_loss : income-expense})

        console.log(total)
    }

} , [amount])

const onFinish = (values) => {
    console.log('Success:', values);

    let newRef = amount 
    const detailsObject = {
        ...values , 
        type , 
        created_date : new Date().toLocaleString()

    }
    
    newRef.push(detailsObject)
    setAmpount([...newRef])
    console.log(newRef)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  

  const columns = [
    {
        title: 'Date',
        dataIndex: 'created_date',
        key: 'created_date',
      },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
    }
    
  ];
  

    return(
        <main
      className={`flex min-h-screen flex-col items-center  p-24  ` }
    >

        <h1 className='text-[50px]' >Expense Tracking App</h1>

        <div className='flex justify-between items-center gap-[30px] m-[30px]' >
            <h1>Amount Type : </h1>
<button onClick={()=>setType('Income')} 
style={{border:'2px solid black' , borderRadius:'30px' , padding:'10px',
backgroundColor:type==='Income'?'green' : 'white' ,
color:type==='Income'? 'white' : 'black'}}>Income</button>

<button onClick={()=>setType('Expense')} 
style={{border:'2px solid black' , borderRadius:'30px' , padding:'10px',
backgroundColor:type==='Expense'?'#DC2626' : 'white' ,
color:type==='Expense'? 'white' : 'black'}}>Expense</button>
        </div>



        

<Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"


    
  >




<Form.Item
      label="Amount"
      name="amount"
      rules={[
        {
          required: true,
          message: 'Please input your Amount!',
        },
      ]}
    >
      <Input />
    </Form.Item>   



    
<Form.Item
      label="Description"
      name="desc"
      rules={[
        {
          required: true,
          message: 'Please input amount description!',
        },
      ]}
    >
      <Input />
    </Form.Item>  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button  htmlType="submit">
        Submit
      </Button>
    </Form.Item>
    </Form>


<div className='flex flex-wrap gap-[100px] m-10'>
    <div className='flex flex-col justify-between items-center'>
        <h1 className='text-[40px] font-bold text-green-600'>Income</h1>
        <h1 className='text-[40px] font-bold text-green-600'>{total.income}</h1>
    </div>

    <div className='flex flex-col justify-between items-center'>
        <h1 className='text-[40px] font-bold text-red-600'>Expense</h1>
        <h1 className='text-[40px] font-bold text-red-600'>{total.expense}</h1>
    </div>

    <div className='flex flex-col justify-between items-center'>
        <h1 className='text-[40px] font-bold'
        style={{color:total.profit_loss>=0 ? 'green' : 'red'}}>Profit OR Loss</h1>
        <h1 className='text-[40px] font-bold' 
        style={{color:total.profit_loss>=0 ? 'green' : 'red'}}>{total.profit_loss}</h1>
    </div>
</div>

    <Table dataSource={amount} columns={columns}></Table>

    </main>
    )
}