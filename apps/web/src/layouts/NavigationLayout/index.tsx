import { RouterObject } from '@web/core/router'
import { useDesignSystem } from '@web/designSystem'
import { Model } from '@web/domain'
import { useAuthentication } from '@web/modules/authentication'
import { Col, Layout, Row } from 'antd'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Logo } from './components/Logo'
import { SubNavigation } from './components/SubNavigation'
import { Topbar } from './components/Topbar/index.layout'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const authentication = useAuthentication()
  const user = authentication?.user as Model.User

  const { isMobile } = useDesignSystem()

  const goTo = (url: string) => {
    router.push(url)
  }

  const goToUserPage = (url: string) => {
    router.push(url.replace(':id', user?.id))
  }

  const itemsLeftbar = [

{
      key: '/dashboard',
      label: 'Dashboard',
      onClick: () => goTo('/dashboard'),
    },

{
      key: '/accounts',
      label: 'Accounts Overview',
      onClick: () => goTo('/accounts'),
    },

{
      key: '/add-account',
      label: 'Add Account',
      onClick: () => goTo('/add-account'),
    },

{
      key: '/monthly-input',
      label: 'Monthly Input',
      onClick: () => goTo('/monthly-input'),
    },

{
      key: '/historical-data',
      label: 'Historical Data',
      onClick: () => goTo('/historical-data'),
    },

]

  const itemsUser = [

]

  const itemsTopbar = [
    
  ]

  const itemsSubNavigation = [
    
    {
      key: '/dashboard',
      label: 'Dashboard',
    },
    
    {
      key: '/accounts',
      label: 'Accounts Overview',
    },
    
    {
      key: '/account/:id',
      label: 'Account Details',
    },
    
    {
      key: '/add-account',
      label: 'Add Account',
    },
    
    {
      key: '/edit-account/:id',
      label: 'Edit Account',
    },
    
    {
      key: '/account/:id/add-transaction',
      label: 'Add Transaction',
    },
    
    {
      key: '/account/:id/edit-transaction/:transactionId',
      label: 'Edit Transaction',
    },
    
    {
      key: '/monthly-input',
      label: 'Monthly Input',
    },
    
    {
      key: '/historical-data',
      label: 'Historical Data',
    },
    
  ]

  const itemsMobile = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => goTo(RouterObject.route.PROFILE),
    },
    {
      key: 'notifications',
      label: 'Notifications',
      onClick: () => goTo(RouterObject.route.NOTIFICATIONS),
    },
    ...itemsTopbar,
    ...itemsLeftbar,
  ]

  const isLeftbar = itemsLeftbar.length > 0 && !isMobile

  return (
    <>
      <Layout>
        <Row
          style={{
            height: '100vh',
            width: '100vw',
          }}
        >
          {isLeftbar && (
            <Col>
              <Leftbar
                items={itemsLeftbar}
                itemsUser={itemsUser}
                logo={<Logo className="m-2" />}
              />
            </Col>
          )}

          <Col
            style={{
              flex: 1,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Topbar
              isMobile={isMobile}
              items={itemsTopbar}
              itemsMobile={itemsMobile}
              logo={!isLeftbar && <Logo width={40} height={40} />}
            />

            <Col
              style={{
                flex: 1,
                overflowY: 'auto',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <SubNavigation items={itemsSubNavigation} />

              {children}
            </Col>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
