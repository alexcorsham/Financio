'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Statistic, Space } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HistoricalDataPage() {
  const router = useRouter()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    if (userId) {
      Api.Account.findManyByUserId(userId, { includes: ['accountBalances'] })
        .then(setAccounts)
        .catch(() => enqueueSnackbar('Failed to fetch accounts', { variant: 'error' }))
    }
  }, [userId])

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Historical Data</Title>
        <Text>This page provides a historical overview of your financial accounts.</Text>
        <Row gutter={[16, 16]}>
          {accounts?.map(account => (
            <Col xs={24} sm={12} md={8} lg={6} key={account.id}>
              <Card title={account.name} bordered={false}>
                {account.accountBalances?.map((balance, index) => (
                  <Statistic
                    key={index}
                    title={`Balance as of ${dayjs(balance.balanceDate).format('MMM D, YYYY')}`}
                    value={balance.balance}
                    precision={2}
                    valueStyle={{ color: balance.balance >= 0 ? '#3f8600' : '#cf1322' }}
                    prefix={balance.balance >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    suffix="USD"
                  />
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}