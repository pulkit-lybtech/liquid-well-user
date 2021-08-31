import CIcon from '@coreui/icons-react';
import { CCollapse } from '@coreui/react';
import React from 'react'

export default function Appointment() {
	const [collapse, setCollapse] = React.useState(false);

	const toggle = (e) => {
		setCollapse(!collapse);
		e.preventDefault();
	}

	return (
		<div className="card ">
			<div className="card-header">
				Candidate Appointment
			</div>
			<div className="card-body">
				<div className="d-flex">
					<button className="btn  btn-sm mr-3 btn-outline-dark">
						Category
					</button>
					<button className="btn btn-sm  mr-3 btn-outline-dark">
						Sub-Category A
					</button>
					<button className="btn btn-sm  mr-3 btn-outline-dark">
						Sub-Category B
					</button>

				</div>

				<div className="avail mt-3">
					<div className="card mb-3 person">

						<div className="card-body">
							<div className="row">
								<div className="col-sm-6">
									<h3>

									<strong>Name: 	</strong> <span> Ramesh Kumar </span>
									</h3>
								</div>
								<div className="col-sm-6">
									<strong>Designation: 	</strong> <span> Interviewer </span>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<strong>Experience: 	</strong> <span> 2 Years </span>
								</div>
								<div className="col-sm-6">
								<strong>
								Expertise: 
								</strong>
								<span className="badge badge-secondary badge-lg ml-2">B1 </span>
								<span className="badge badge-secondary badge-lg ml-2">B2 </span>
								</div>
							</div>
							

							<div className="rating mt-3">
								<CIcon size="lg" name={'cilStar'} />
								<CIcon size="lg" name={'cilStar'} />
								<CIcon size="lg" name={'cilStar'} />
								<CIcon size="lg" name={'cilStar'} />
							</div>

						
							

						
						</div>


						<div className="card-footer">
							<button onClick={toggle} className="btn btn-outline-primary ">
								Book Slot
							</button>
						</div>

						<CCollapse
							show={collapse} >
							<div className="card-body">
								<h5>Interviewer Descripton </h5>
								<div className="alert alert-light mb-3">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laudantium veritatis rem eaque, sint id nobis? Provident minus molestiae at suscipit consectetur! Optio.
								</div>

							<div className="row">
							<div className="price col-md-6   ">
									<div className="card">
										<div className="card-body">
											<h4>For 1 Interview </h4>
											<h5> Rs 500/- </h5>
											<button  to="/calendar" className="btn btn-primary">
												Slots 
											</button>
										</div>
									</div>
								</div>
								<div className="price col-md-6 ">
									<div className="card">
									<div className="card-body">
										<h4>For 2 Interview </h4>
										<h5> Rs 1000/- </h5>
										<button  to="/calendar" className="btn btn-primary">
											Slots 
										</button>
									</div>
									</div>
								</div>
								<div className="price col-md-6 ">
									<div className="card">
									<div className="card-body">
										<h4>For 3 Interview </h4>
										<h5> Rs 1600/- </h5>
										<button to="/calendar" className="btn btn-primary">
											Slots 
										</button>
									</div>
									</div>
								</div>
							</div>
							</div>
						</CCollapse>

					</div>
				</div>
			</div>
		</div>
	)
}
