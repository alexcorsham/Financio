'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, InputNumber, Radio, Select, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddTransactionPage() {
  const router = useRouter();
  const params = useParams<any>();
  const authentication = useAuthentication();
  const { enqueueSnackbar } = useSnackbar();
  const [accounts, setAccounts] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchAccounts = async () => {
      if (authentication.user?.id) {
        try {
          const accountsFound = await Api.Account.findManyByUserId(authentication.user.id, { includes: ['transactions'] });
          setAccounts(accountsFound);
        } catch (error) {
          enqueueSnackbar('Failed to fetch accounts', { variant: 'error' });
        }
      }
    };

    fetchAccounts();
  }, [authentication.user?.id]);

  const handleSubmit = async (values: any) => {
    try {
      await Api.Transaction.createOneByAccountId(values.accountId, {
        amount: values.amount,
        type: values.type,
        date: dayjs().format('YYYY-MM-DD'),
        accountId: values.accountId,
      });
      enqueueSnackbar('Transaction added successfully', { variant: 'success' });
      router.push(`/account/${values.accountId}`);
    } catch (error) {
      enqueueSnackbar('Failed to add transaction', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>Add Transaction</Title>
        <Paragraph>Add a new deposit or withdrawal to your account.</Paragraph>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="accountId" label="Account" rules={[{ required: true, message: 'Please select an account' }]}>
            <Select placeholder="Select an account">
              {accounts.map((account: any) => (
                <Option key={account.id} value={account.id}>{account.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please input the amount' }]}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the transaction type' }]}>
            <Radio.Group>
              <Radio value="deposit">Deposit</Radio>
              <Radio value="withdrawal">Withdrawal</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
              Add Transaction
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  );
}