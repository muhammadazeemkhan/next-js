import { Button, Form, Input , Table  } from 'antd';
import { useState } from 'react';



export default function Student() {
    
    const [sudent , setStudent] = useState([])



    const onFinish = (values) => {
        console.log('Success:', values);

        let newRef = sudent 
        newRef.push(values)
        setStudent([...newRef])
        console.log(newRef)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'Age',
          key: 'Age',
        },
        {
          title: 'Address',
          dataIndex: 'class',
          key: 'class',
        },
      ];
      
    
  
    return (
      <main
        className={`flex min-h-screen flex-col items-center  p-24 `}
      >
        
        <h1>Students</h1>

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
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>   



    
<Form.Item
      label="Class"
      name="class"
      rules={[
        {
          required: true,
          message: 'Please input your Class!',
        },
      ]}
    >
      <Input />
    </Form.Item>  




    
<Form.Item
      label="Age"
      name="Age"
      rules={[
        {
          required: true,
          message: 'Please input your Age!',
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


    <Table dataSource={sudent} columns={columns} />;


    
  
 
      </main>
    )
  }
  