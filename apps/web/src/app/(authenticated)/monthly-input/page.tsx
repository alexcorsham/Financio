'use client'

import React, { useEffect, useState } from 'react'
import { Button, Form, Input, DatePicker, Select, Typography, Row, Col, Card } from 'antd'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MonthlyInputPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [accounts, setAccounts] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const accountsFound = await Api.Account.findManyByUserId(userId, { includes: ['transactions', 'accountBalances'] })
        setAccounts(accountsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch accounts', { variant: 'error' })
      }
    }

    if (userId) {
      fetchAccounts()
    }
  }, [userId])

  const onFinish = async (values) => {
    try {
      const { accountId, ...rest } = values
      const transactionCreated = await Api.Transaction.createOneByAccountId(accountId, {
        ...rest,
        date: rest.date.format('YYYY-MM-DD'),
      })
      enqueueSnackbar('Transaction added successfully', { variant: 'success' })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Failed to add transaction', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24} md={12} lg={8}>
          <Card>
            <Title level={2}>Monthly Financial Input</Title>
            <Text>Update your financial account balances and transactions for a specific month.</Text>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item name="accountId" label="Account" rules={[{ required: true, message: 'Please select an account!' }]}>
                <Select placeholder="Select an account">
                  {accounts.map((account) => (
                    <Option key={account.id} value={account.id}>{account.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please input the amount!' }]}>
                <Input prefix="$" type="number" />
              </Form.Item>
              <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select a type!' }]}>
                <Select placeholder="Select a type">
                  <Option value="income">Income</Option>
                  <Option value="expense">Expense</Option>
                </Select>
              </Form.Item>
              <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select a date!' }]}>
                <DatePicker format="YYYY-MM-DD" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add Transaction</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}