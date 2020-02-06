import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import Message from './messages';
import Report from './reports';
import ReportModal from './reportModal';
import Promotion from './promotion';
import Payment from './payment';
import StatisticReport from './statisticsReports';
import Inventory from './inventory';
import Account from './accounts';
import TableReservation from './table-reservation';
import Devices from './devices';
import EmployeesList from './employees-list';
import ProductList from './product-list';
import Archive from './archive';
import Floor from './floors';
import Discount from './discount';
import Printer from './printers';
import Review from './reviews';
import BusinessInformation from './business-information';
import CompanyInfo from './company-info';
import MessageModal from './messageModal';
import RestaurantReport from './restaurant-reports';
import RestaurantReportModal from './restaurant-report-modal';
import AccountModal from './account-modal';
import ChangePassword from './change-password';
import AddEmployee from './add-employee';
import AddProduct from './add-product';
import EditProduct from './edit-product';
import ArchieveModal from './archieve-modal';
import FloorLayout from './floor-layout';
import ManageTableModal from './manage-table-modal';
import RestaurantReview from './restaurant-reviews';
import UserReview from './user-reviews';
import AddCuisine from './add-cuisine';
import AdminInfo from './admin-info';
import MainPage from '../main';
import ForgotPassword from '../forgot/forgotPassword';
import FloorLayoutLeft from './floor-layout-left';
import FloorLayoutRight from './floor-layout-right';

class MainIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : ''
        }
    }

    componentWillMount() {
        this.setState({user:localStorage.getItem('user_type')})
    }
    render() {
        return (
            <div>
                {/* <Router>
                    <Route exact path='/forgot-password' component={ForgotPassword} /> */}
                    <div className="skin-blue sidebar-mini">
                        {this.state.user === 'restaurant' ? <div className="wrapper">
                            <Header />
                            <Sidebar />
                            <Switch>
                                <Route exact path='/restaurant' component={Dashboard} />
                                <Route exact path='/restaurant/messages' component={Message} />
                                <Route exact path='/restaurant/reports' component={Report} />
                                <Route exact path="/restaurant/restaurant-reports" component={RestaurantReport} />
                                <Route exact path="/restaurant/promotions" component={Promotion} />
                                <Route exact path="/restaurant/payment" component={Payment} />
                                <Route exact path="/restaurant/statistics-reports" component={StatisticReport} />
                                <Route exact path="/restaurant/inventory" component={Inventory} />
                                <Route exact path="/restaurant/accounts" component={Account} />
                                <Route exact path="/restaurant/table-reservation" component={TableReservation} />
                                <Route exact path="/restaurant/devices" component={Devices} />
                                <Route exact path="/restaurant/employees-list" component={EmployeesList} />
                                <Route exact path="/restaurant/add-employee" component={AddEmployee} />
                                <Route exact path="/restaurant/product-list" component={ProductList} />
                                <Route exact path="/restaurant/add-product" component={AddProduct} />
                                <Route exact path="/restaurant/edit-product/:id" component={EditProduct} />
                                <Route exact path="/restaurant/archive" component={Archive} />
                                <Route exact path="/restaurant/floors" component={Floor} />
                                <Route exact path="/restaurant/floor-layout/" component={FloorLayout} />
                                <Route exact path="/restaurant/floor-layout-left/" component={FloorLayoutLeft} />
                                <Route exact path="/restaurant/floor-layout-right/" component={FloorLayoutRight} />
                                <Route exact path="/restaurant/discount" component={Discount} />
                                <Route exact path="/restaurant/printers" component={Printer} />
                                <Route exact path="/restaurant/reviews" component={Review} />
                                <Route exact path="/restaurant/restaurant-reviews" component={RestaurantReview} />
                                <Route exact path="/restaurant/user-reviews" component={UserReview} />
                                <Route exact path="/restaurant/business-information" component={BusinessInformation} />
                                <Route exact path="/restaurant/company-info" component={CompanyInfo} />
                                <Route exact path="/restaurant/admin-info" component={AdminInfo} />
                                <Route exact path="/restaurant/*"> 
                                    <NoMatch />
                                </Route>
                            </Switch>
                        </div>: <Redirect exact to={"/restaurant"} />}
                        <ReportModal />
                        <MessageModal />
                        <RestaurantReportModal />
                        <AccountModal />
                        <ChangePassword />
                        <ArchieveModal />
                        <ManageTableModal />
                    </div>
                {/* </Router> */}
            </div>
        );
    }
}

export default MainIndex;

// If the Link is invalid then push back to the last Linked opened
function NoMatch() {
    window.history.back(-1);
}