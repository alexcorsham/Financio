'use client'

import React, { useEffect, useState } from 'react';
import { Typography, Card, Row, Col, List, Avatar } from 'antd';
import { DollarCircleOutlined, TransactionOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
interface User {
  id: string;
  name?: string;
  pictureUrl?: string;
  accounts?: Account[];
}
interface Account {
  id: string;
  name: string;
  user?: User;
  transactions?: Transaction[];
  accountBalances?: AccountBalance[];
}
interface Transaction {
  id: string;
  type: string;
  amount: number;
  date: string;
}
interface AccountBalance {
  balance: number;
}
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DashboardPage() {
  const router = useRouter();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      alert('User not found');
      return;
    }

    const fetchData = async () => {
      try {
        const userData = await Api.User.findOne(userId, { includes: ['accounts', 'accounts.transactions', 'accounts.accountBalances'] }) as User;
        setUser(userData);
      } catch (error) {
        alert('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={2}>Financial Dashboard</Title>
      <Text>Welcome back, {user?.name}! Here's an overview of your financial accounts.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        {user?.accounts?.map((account) => (
          <Col xs={24} sm={12} lg={8} key={account.id}>
            <Card
              title={account.name}
              extra={<Avatar src={account.user?.pictureUrl} />}
              actions={[
                <DollarCircleOutlined key="balance" onClick={() => router.push(`/account/${account.id}`)} />,
                <TransactionOutlined key="transaction" onClick={() => router.push(`/account/${account.id}/add-transaction`)} />,
              ]}
            >
              <List
                itemLayout="horizontal"
                dataSource={account.transactions}
                renderItem={(item: Transaction) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar icon={<TransactionOutlined />} />}
                      title={<a onClick={() => router.push(`/account/${account.id}/edit-transaction/${item.id}`)}>{item.type}</a>}
                      description={`Amount: $${item.amount} - Date: ${dayjs(item.date).format('DD/MM/YYYY')}`}
                    />
                  </List.Item>
                )}
              />
              <Text strong>Balance: ${account.accountBalances?.[0]?.balance}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}