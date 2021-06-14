import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { CChartBar } from '@coreui/react-chartjs'
import React from 'react'
import { DocsLink } from 'src/reusable'

export default function DTor() {
	return (
		<div>
			<div className="card">
				<h1 className="px-3 py-3">
					D-Tor View
				</h1>
				<div className="row m-0">
					<div className="col-md-8">
						<div className="card bg-light rounded-lg" style={{ height: '220px' }}>
							<div className="text-center">
								Video Here
							</div>
						</div>
						<div className="card-body p-3">
							<CCard>
								<CCardHeader>
									Results 
								</CCardHeader>
								<CCardBody>
								
								</CCardBody>
							</CCard>
						</div>
						<div className="card-footer">
							<div className="btn-group mx-auto ">
								<button className="btn btn-outline-primary">
									Upload
								</button>
								<button className="btn btn-outline-primary">
									Play
								</button>
								<button className="btn btn-outline-primary">
									Submit
								</button>

							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card bg-white rounded-lg mb-3" style={{ height: 'auto' }}>
						<CChartBar
										height="140"
										datasets={[
											{
												label: 'Result',
												backgroundColor: '#f87979',
												data: [40, 20, 12, 39, 10, 40, 39],
												
											}
										]}
										labels="weeks"
										options={{
											tooltips: {
												enabled: false
											},
											borderWidth: 2,
											height: 14,

										}}
									/>
						</div>
						<div className="card bg-light rounded-lg mb-3" style={{ height: '120px' }}>

						</div>
						<div className="card bg-light rounded-lg mb-3" style={{ height: '120px' }}>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
