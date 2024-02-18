'use client'

import React, { useEffect, useState } from 'react';
import { Typography, Card, List, Avatar, Space } from 'antd';
import { MoneyCollectOutlined, TransactionOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AccountOverviewPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [accounts, setAccounts] = useState<Model.Account[]>([]);

  useEffect(() => {
    if (userId) {
      Api.Account.findManyByUserId(userId, { includes: ['accountBalances', 'transactions'] })
        .then(setAccounts)
        .catch(() => enqueueSnackbar('Failed to fetch accounts', { variant: 'error' }));
    }
  }, [userId]);

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Account Overview</Title>
      <Text>Your financial accounts and recent transactions.</Text>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={accounts}
        renderItem={account => (
          <List.Item>
            <Card
              title={account.name}
              actions={[
                <Space key="balance">
                  <MoneyCollectOutlined />
                  <Text>Balance: {account.accountBalances?.[0]?.balance}</Text>
                </Space>,
                <Space key="transactions" onClick={() => router.push(`/account/${account.id}`)}>
                  <TransactionOutlined />
                  <Text>Transactions</Text>
                </Space>,
              ]}
            >
              <List
                dataSource={account.transactions?.slice(0, 5)}
                renderItem={transaction => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                      title={`${transaction.amount} ${transaction.type}`}
                      description={dayjs(transaction.date).format('DD/MM/YYYY')}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </List.Item>
        )}
      />
    </PageLayout>
  );
}