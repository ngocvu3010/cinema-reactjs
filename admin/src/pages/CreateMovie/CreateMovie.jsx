import React, {useEffect, useState} from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Form, Input,
  Select, InputNumber, DatePicker } from "antd";
import { PlusOutlined, InboxOutlined, UploadOutlined, MinusCircleOutlined } from '@ant-design/icons';
import {flashSuccess, flashError} from "../../untils/flash";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const CreateMovie = () => {
  const navigate = useNavigate();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
      min: '${label} must be between <= ${min}',
      max: '${label} must be between >= ${max}'
    },
  };

  const onFinish = (values) => {
    const url = process.env.REACT_APP_HOST + "/movies";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        flashSuccess("🦄 Create movie successfully");
        navigate("/");
      })
      .catch((error) => {
        flashError("🦄 Create movie failed");
        console.error("Error:", error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const url = process.env.REACT_APP_HOST + '/categories'
    fetch(url)
    .then(res => res.json())
    .then((categories) => {
      setCategories(categories)})
  }, [])

  return(
    <>
      <h1>Create movie</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        validateMessages={validateMessages}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input movie name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="slug"
          name="slug"
          rules={[{ required: true, message: 'Please input slug!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="Category"
          rules={[{ required: true, message: 'Category is required' }]}
        >
          <Select placeholder="Select Category">
            {categories.length > 0 && categories.map(category => (
              <Option value={category.id} key={category.id}>{category.name}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="description"
          name="description"
          rules={[{ required: true, message: 'Please input description!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="trailer"
          name="trailer"
          rules={[{ required: true, message: 'Please input trailer!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Time" name="times">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Premieres" name="premieres">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Images">
        <Form.List
          name="images"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least 2 img'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(formItemLayout)}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input img's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input placeholder="img url" style={{ width: '60%' }} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: '60%' }}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default CreateMovie;
