'use client'

import { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber, DatePicker, Typography, Row, Col, Space } from 'antd'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditTransactionPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [transaction, setTransaction] = useState<any>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const transactionFound = await Api.Transaction.findOne(params.transactionId, { includes: ['account'] })
        setTransaction(transactionFound)
        form.setFieldsValue({
          amount: transactionFound.amount,
          type: transactionFound.type,
          date: dayjs(transactionFound.date),
        })
      } catch (error) {
        enqueueSnackbar('Failed to fetch transaction details', { variant: 'error' })
      }
    }

    if (params.transactionId) {
      fetchTransaction()
    }
  }, [params.transactionId, form])

  const onFinish = async (values: any) => {
    try {
      const updatedTransaction = await Api.Transaction.updateOne(params.transactionId, {
        ...values,
        date: values.date.format('YYYY-MM-DD'),
      })
      enqueueSnackbar('Transaction updated successfully', { variant: 'success' })
      router.push(`/account/${updatedTransaction.accountId}`)
    } catch (error) {
      enqueueSnackbar('Failed to update transaction', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>Edit Transaction</Title>
            <Text>Edit the details of your transaction.</Text>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item name="amount" label="Amount" rules={[{ required: true, message: 'Please input the amount!' }]}>
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please input the type!' }]}>
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Date" rules={[{ required: true, message: 'Please select the date!' }]}>
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Transaction
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}