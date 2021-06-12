import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Progress Graph </h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/> Add D-Tor 
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <div className="row">
            <div className="col-lg-7">
            <MainChartExample style={{height: '250px', marginTop: '30px'}}/>
            </div>
            <div className="col-lg-5">
              <div className="card mt-3">
                <div className="card-body">
                  <h4 className="card-title">Previous Dialogues</h4>
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Dialogues </th>
                        <th>Date </th>
                        <th>Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Dialogues</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Results</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            
         
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts/> */}

      <CRow>
        <CCol lg="4">
            <CCard>
              <CCardHeader>E-Scale</CCardHeader>
              <CCardBody className="p-0">
              <table className="table border-top-0 table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>E-Scales </th>
                        <th>Date </th>
                        <th>Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
              </CCardBody>
            </CCard>
        </CCol>
        
        <CCol lg="4">
            <CCard>
              <CCardHeader><strong>Date-Wise Certification</strong> </CCardHeader>
              <CCardBody className="px-2">
                <ul className="list-group cust-list">
                  <li className="list-group-item d-flex justify-content-between align-items center">
                    Lorem ipsum dolor sit amet.
                    <span className="badge badge-primary">
                      36
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items center">
                    Lorem ipsum dolor sit amet.
                    <span className="badge badge-primary">
                      36
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items center">
                    Lorem ipsum dolor sit amet.
                    <span className="badge badge-primary">
                      36
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items center">
                    Lorem ipsum dolor sit amet.
                    <span className="badge badge-primary">
                      36
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items center">
                    Lorem ipsum dolor sit amet.
                    <span className="badge badge-primary">
                      36
                    </span>
                  </li>
                </ul>
              </CCardBody>
            </CCard>
        </CCol>
        
        <CCol lg="4">
            <CCard>
              <CCardHeader>Previous D-Tor's  </CCardHeader>
              <CCardBody className="p-0">
              <table className="table border-top-0 table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>D-Tor's  </th>
                        <th>Date </th>
                        <th>Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td> Lorem Ipsum Duummy </td>
                        <td> 2-25-19  </td>
                        <td>
                          Pass
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>
              </CCardBody>
            </CCard>
        </CCol>
        
      </CRow>
    </>
  )
}

export default Dashboard
