'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Typography, Upload, message, Col, Row } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditAccountPage() {
  const router = useRouter();
  const params = useParams<any>();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [form] = Form.useForm();
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      if (userId && params.id) {
        try {
          const accountsFound = await Api.Account.findManyByUserId(userId, { includes: ['user'] });
          const accountToEdit = accountsFound.find(acc => acc.id === params.id);
          if (accountToEdit) {
            setAccount(accountToEdit);
            form.setFieldsValue({
              name: accountToEdit.name,
            });
          }
        } catch (error) {
          enqueueSnackbar('Failed to fetch account details', { variant: 'error' });
        }
      }
    };
    fetchAccount();
  }, [userId, params.id, form]);

  const handleUpdateAccount = async (values) => {
    setLoading(true);
    try {
      await Api.Account.updateOne(params.id, { ...values, userId });
      enqueueSnackbar('Account updated successfully', { variant: 'success' });
      router.push('/accounts');
    } catch (error) {
      enqueueSnackbar('Failed to update account', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (!account) return null;

  return (
    <PageLayout layout="full-width">
      <Title>Edit Account</Title>
      <Text>Edit the details of your financial account.</Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleUpdateAccount}
        initialValues={{
          name: account.name,
        }}
      >
        <Row gutter={16} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Account Name"
              name="name"
              rules={[{ required: true, message: 'Please input the account name!' }]}
            >
              <Input placeholder="Enter account name" />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update Account
            </Button>
          </Col>
        </Row>
      </Form>
    </PageLayout>
  );
}