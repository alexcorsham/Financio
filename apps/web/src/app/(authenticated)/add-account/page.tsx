'use client'

import React, { useState } from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddNewAccountPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [form] = Form.useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: { name: string }) => {
    if (!userId) {
      enqueueSnackbar('User must be logged in to create an account', { variant: 'error' });
      return;
    }

    setIsSubmitting(true);
    try {
      await Api.Account.createOneByUserId(userId, { name: values.name });
      enqueueSnackbar('Account created successfully', { variant: 'success' });
      router.push('/accounts');
    } catch (error) {
      enqueueSnackbar('Failed to create account', { variant: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}><PlusCircleOutlined /> Add New Financial Account</Title>
        <Paragraph>
          Use the form below to add a new financial account to your Financio dashboard.
        </Paragraph>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          requiredMark={false}
        >
          <Form.Item
            label="Account Name"
            name="name"
            rules={[{ required: true, message: 'Please input the account name!' }]}
          >
            <Input placeholder="Enter account name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting} icon={<PlusCircleOutlined />}>
              Add Account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  );
}