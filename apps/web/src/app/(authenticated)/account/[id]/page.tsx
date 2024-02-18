'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, List, Avatar, Space } from 'antd'
import { DollarCircleOutlined, CalendarOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
interface Transaction {
  id: string
  amount: number
  type: string
  date: string
}
interface AccountBalance {
  id: string
  balance: number
  balanceDate: string
}
interface AccountDetails {
  id: string
  name: string
  dateCreated: string
  transactions?: Transaction[]
  accountBalances?: AccountBalance[]
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AccountDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useAuthentication()
  const userId = user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [accountDetails, setAccountDetails] = useState<AccountDetails | null>(null)

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const accounts = await Api.Account.findManyByUserId(userId, {
          includes: ['transactions', 'accountBalances'],
        })
        const account = accounts.find((acc) => acc.id === params.id)
        if (account) {
          setAccountDetails(account)
        } else {
          enqueueSnackbar('Account details not found', { variant: 'error' })
          router.push('/accounts')
        }
      } catch (error) {
        enqueueSnackbar('Failed to fetch account details', { variant: 'error' })
      }
    }

    if (userId) {
      fetchAccountDetails()
    }
  }, [userId, params.id, router])

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2}>Account Details</Title>
      <Text>
        Here you can find detailed information about your financial account, including transactions and account balances over time.
      </Text>
      <Card style={{ marginTop: '20px' }}>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Title level={4}>Account Information</Title>
            <Text><strong>Name:</strong> {accountDetails?.name}</Text><br />
            <Text><strong>Created:</strong> {dayjs(accountDetails?.dateCreated).format('DD/MM/YYYY')}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Title level={4}>Recent Transactions</Title>
            <List
              itemLayout="horizontal"
              dataSource={accountDetails?.transactions}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<DollarCircleOutlined />} />}
                    title={item.type}
                    description={`${item.amount} - ${dayjs(item.date).format('DD/MM/YYYY')}`}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Title level={4}>Account Balances Over Time</Title>
            <List
              dataSource={accountDetails?.accountBalances}
              renderItem={item => (
                <List.Item>
                  <Space>
                    <CalendarOutlined />
                    <Text>{dayjs(item.balanceDate).format('DD/MM/YYYY')}</Text>
                    <Text>-</Text>
                    <Text>{item.balance}</Text>
                  </Space>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
}