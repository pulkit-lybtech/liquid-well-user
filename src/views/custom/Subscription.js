import React from 'react'

export default function Subscription() {
	const subsc = [
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
		{
			id: 1,
			name: "Plan A",
			date: "21-12-2021",
			Price: "12$"
		},
	]
	return (
		<div className="row">
			<div className="col-xl-7">
				<div className="card">
					<div className="card-body">
						<h1 className="h2">Subscription</h1>
						<p className="text-muted">View and Manage Your Subscription Here.</p>

						<table className="table">
							<thead>	
								<th>#</th>
								<th>Plan Name </th>
								<th> Renew Date </th>
								<th> Date Bought </th>
								<th> Price </th>
								<th> </th>
							</thead>
							{subsc.map((item, idx) => {
								return(
									<tr key="idx">
										<td> {item.id}</td>
										<td> {item.name}</td>
										<td> {item.date}</td>
										<td> {item.date}</td>
										<td> {item.Price}</td>
										<td> </td>
									</tr>
								)
							})}
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}
