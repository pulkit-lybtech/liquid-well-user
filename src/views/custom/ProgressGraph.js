import { CChartBar } from '@coreui/react-chartjs'
import React from 'react'
import {CCallout} from '@coreui/react'
export default function ProgressGraph() {
	const bar = {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7',"Q8", 'Q5', 'Q6', 'Q7',],
		datasets: [
		  {
			label: 'Results',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			borderWidth: 1,
			hoverBackgroundColor: 'rgba(255,99,132,0.4)',
			hoverBorderColor: 'rgba(255,99,132,1)',
			data: [65, 59, 80, 81, 56, 55, 40,23,15,44,45],
		  },
		],
	  };
	  
	  const options = {
		// tooltips: {
		//   enabled: false,
		//   custom: customTooltips
		// },
		maintainAspectRatio: false,
		height: 600
	  }


	  
	return (
		<div className="card">
			<div className="card-header">
				<div className="d-flex justify-content-between align-items-center ">
					<h1 className="text-dark">
						Progress Graph 
					</h1>
					<div className="btn-group">
						<button className="btn btn-dark">Print</button>
						<button  className="btn btn-dark">Download</button>
					</div>
				</div>
			</div>
			<div className="card-body">
				<div className="chart-wrapper" >
					<CChartBar datasets={bar.datasets} options={options} labels={bar.labels	} style={{height:"270px"}}/>
				</div>
			</div>
			<div className="card-footer bg-white">
				<div className="row">
					<div className="col-md-3 col-lg-2">
						<CCallout color="info">
							<h5>Total Questions</h5>
								3435
						</CCallout>
					</div>
					<div className="col-md-3 col-lg-2">
						<CCallout color="success">
							<h5>Correct Answers</h5>
								3435
						</CCallout>
					</div>
					<div className="col-md-3 col-lg-2">
						<CCallout color="danger">
							<h5>Wrong Answers</h5>
								3435
						</CCallout>
					</div>
					<div className="col-md-3 col-lg-2">
						<CCallout color="warning">
							<h5>Accuracy</h5>
								3435
						</CCallout>
					</div>
				</div>
			</div>
		</div>
	)
}
