import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBillboards } from '../../redux/billboard-data/billboardDataReducer';
import BillboardCategory from '../billboard-category/billboard-category';
import DisplayBillboards from '../billboards-display/billboards-display';
// import BillboardsTable from '../billboards-table/billboard-table';
import CampaignManagement from '../campaigns-mgt/campaigns-mgt';
import DoughnutChart from '../doughnut-chart/doughnut-chart';
import PeopleManagement from '../people-mgt/people-mgt';
// import BillboardsTable from '../../components/billboards-table/billboard-table';
import './management-dashboard.css';

const ManagementDashboard = () => {
    const dashboardManagementState = useSelector(({dashboard}) => dashboard.management);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAllBillboards()); //eslint-disable-next-line
    },[])
    return (
            dashboardManagementState.child === 'inventory' ? 
                <DisplayBillboards showCreate showCategoryNav/>
            :
            dashboardManagementState.child === 'people' ?
                <PeopleManagement />
                :
                dashboardManagementState.child === 'campaign' ?
                <CampaignManagement />
                :
            <div className="dashy">
                <BillboardCategory />
                <div className="row">
                    <div className="col-md-4 pl-0">
                        <div className="row">
                            <div className="col-md-6 digital">
                                <p>Digital</p>
                                <div>Active</div>
                                <div>Inactive</div>
                                <div>Vacant</div>
                            </div>
                            <div className="col-md-6 digital">
                                <p>Digital</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
                        </div>
                        <div className="col-md-12 types">
                            <p>Types</p>
                            <div className="">Active</div>
                            <div className="">Inactive</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 total">
                                <p>Total</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
                            <div className="col-md-9 billboards">
                                <p>Billboards</p>
                                <div className="">Active</div>
                                <div className="">Inactive</div>
                            </div>
        
                        </div>
                        <div className="col-md-12 lagos">
                            <p>Lagos</p>
                            <div className="">Active</div>
                            <div className="">Inactive</div>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <DisplayBillboards />
                    </div>
                    
                </div>
                
            </div> 
    )
}

export default ManagementDashboard;