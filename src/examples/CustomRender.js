import React, { Component } from 'react';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import FormBuilder from '../FormBuilder';

const FormItem = Form.Item;

class CustomRender extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.renderDuration = this.renderDuration.bind(this);
  }

  resetForm() {
    this.props.form.resetFields();
  }

  handleSubmit(evt) {
    if (evt) evt.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      console.log('Form data: ', values);
    });
  }

  renderDuration(args) {
    return (
      <FormItem {...args.formItemProps}>
        <Row>
          <Col span={11}>
            <FormBuilder meta={{ key: 'durationStart', placeholder: 'Start date', widget: DatePicker, required: true }} form={this.props.form} />
          </Col>
          <Col span={2} style={{ textAlign: 'center' }}>-</Col>
          <Col span={11}>
            <FormBuilder meta={{ key: 'durationEnd', placeholder: 'End date', widget: DatePicker }} form={this.props.form} />
          </Col>
        </Row>
      </FormItem>
    );
  }

  render() {
    const formMeta = {
      colon: true,
      columns: 1,
      elements: [
        { key: 'userName', label: 'Name', widget: Input },
        { key: 'duration', label: 'Duration', render: this.renderDuration},
      ],
    };
    return (
      <Form onSubmit={this.handleSubmit} layout="horizontal" style={{ width: '500px' }}>
        <FormBuilder meta={formMeta} form={this.props.form} />
        <div style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">Submit</Button>&nbsp; &nbsp;
          <Button onClick={this.resetForm}>Reset</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(CustomRender);
