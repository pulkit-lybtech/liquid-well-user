import React from 'react'
import icon from "../../assets/pdf.png"
export default function Certifications() {

	const docs = [
		{
			id: 0,
			name: "File_name.pdf",
			size: "34.6KB",
			download: ""
		},
		{
			id: 0,
			name: "File_name3.pdf",
			size: "34.56KB",
			download: ""
		},
		{
			id: 0,
			name: "File_name 2.pdf",
			size: "34.6KB",
			download: ""
		},
		{
			id: 0,
			name: "File_name.pdf",
			size: "34.6KB",
			download: ""
		},
	]
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h1>Certificates </h1>
					<h6 className="text-muted">All Certificates will be displayed here.</h6>
				</div>
				<div className="card-body cert d-flex mt-3">
					<div className="certificate">
						<div className="row">
							{/* {docs.map((item) => {
								<div className="card rounded">
									<div className="card-body">
										<div className="icon">
											<img src={icon} alt="pdf" />
										</div>
									</div>
									<p className="card-text"></p>
								</div>
							})} */}
							{
								docs.map((item, id) => {
									return (
										<div className="card rounded-lg m-2">
											<div className="card-body p-2">
												<div className="icon">
													<img width="180" src={icon} alt="pdf" />
												</div>
											<p className="card-text p-3 strong h6 text-dark ">
												{item.name}
											<small className="text-gray d-inline-block ">
												{item.size}
											</small>
											
											</p>
										
											</div>
											<div className="card-footer btn-group btn-group-sm">
												<button className="btn-secondary btn">
													Share
												</button>
												<button className="btn-secondary btn">
													Download 
												</button>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
