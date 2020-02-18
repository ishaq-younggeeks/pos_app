import React from 'react'
import ActiveReport from './active-reports'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from '../restaurant/header'
import SuperAdminSideBar from './SuperAdminSideBar';
import EmployeesList from './EmployeeList'
import Announcement from './Announcement';
import ConsumerNotification from './ConsumerNotification';
import CuisineManagement from './cuisineManagement';
import SstCharge from './sst-Charge';
import Consumer from './consumer';
import ManageIcForConsumer from './manageIcForConsumer';
import FlaggedConsumer from './flaggedConsumer';
import SuperAdminRestaurant from './restaurant';
import Report from './reports';
import SiteSetting from './siteSetting';
import SocialSetting from './socialSetting';
import BannerManagement from './bannerManagement';
import DashboardManagement from './dashboardbannerManagement.js';
import ProductTemplate from './productTemplate';
import Comission from './comission';
import Subscription from './subscription';
import DidYouKnow from './didYouKnow';
import PrinterDriverManagement from './printerDriverManagement';
import NewRestaurant from './newRestaurant';
import EmailTemplate from './emailTemplate';
import FeedBack from './feedBack';
import FlaggedRestaurant from './flaggedRestaurant';
import Donation from './donation';

class SuperAdminIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:''
    }
  }

  componentWillMount() {
    this.setState({user:localStorage.getItem('user_type')})
}

  render() {
    
    return (
      <div className="skin-blue sidebar-mini">
       { this.state.user === 'superadmin' ? <div className="wrapper">
          <Header/>
          <SuperAdminSideBar/>
          <Route exact path='/super-admin' component={EmployeesList} />
          <Route exact path='/super-admin/restaurant-announcements' component={Announcement} />
          {/* <Route exact path='/super-admin/consumer-notifications' component={ConsumerNotification} /> */}
          <Route exact path='/super-admin/cuisine-management' component={CuisineManagement} />
          <Route exact path='/super-admin/sst-charge' component={SstCharge} />
          <Route exact path='/super-admin/consumer' component={Consumer}/>
          <Route exact path='/super-admin/manage-ic-consumers' component={ManageIcForConsumer}/>
          <Route exact path='/super-admin/flagged-consumer' component={FlaggedConsumer}/>
          <Route exact path='/super-admin/restaurant' component={SuperAdminRestaurant}/>
          <Route exact path='/super-admin/all-reports' component={Report}/>
          <Route exact path='/super-admin/site-settings' component={SiteSetting}/>
          <Route exact path='/super-admin/social-settings' component={SocialSetting}/>
          <Route exact path='/super-admin/consumer-banner-management' component={BannerManagement}/>
          <Route exact path='/super-admin/product-template' component={ProductTemplate}/>
          <Route exact path='/super-admin/comission' component={Comission}/>
          <Route exact path='/super-admin/subscription' component={Subscription}/>
          <Route exact path='/super-admin/did-you-know' component={DidYouKnow}/>
          <Route exact path='/super-admin/printer-driver-management' component={PrinterDriverManagement}/>
          <Route exact path='/super-admin/new-restaurant' component={NewRestaurant}/>
          <Route exact path='/super-admin/email-templates' component={EmailTemplate}/>
          <Route exact path='/super-admin/consumer-feedback' component={FeedBack}/>
          <Route exact path='/super-admin/flagged-restaurant' component={FlaggedRestaurant}/>
          <Route exact path='/super-admin/donation' component={Donation}/>
          <Route exact path='/super-admin/dashboard-banner-management' component={DashboardManagement}/>
        </div>: <Redirect exact to={"/"} />}
      </div>
    )
  }
}
export default SuperAdminIndex;