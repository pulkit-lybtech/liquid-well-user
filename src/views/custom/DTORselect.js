import React from 'react'
import { CProgressBar, CProgress } from "@coreui/react"
export default function DTORselect() {

	let counter = 32

	return (

		<div>
			<div className="card">
				<div className="card-body">
					<div className="row mx-0">
						<div className="col-12">
							<h1 className="h3 mb-3">DTOR Selector </h1>

						</div>
						<div className="col-lg-3">
							<div className="card rounded-lg shadow-sm text-center text-white  bg-info card-info">
								<div className="card-body">
									<h4 className="h1">1 Face</h4>

									<div className="border-bottom py-2">
										10Min/Upload
									</div>
									<div className="border-bottom py-2">
										2 Uploads
									</div>
									<div className="border-bottom py-2">
										0 PPM/Upload
									</div>
									<div className="border-bottom py-2">
										0 - 5 Min
									</div>
								</div>
								<div className="card-footer bg-transparent border-0">
									<button className="btn btn-light btn-block ">
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card rounded-lg shadow-sm text-center text-white  bg-dark card-info">
								<div className="card-body">
									<h4 className="h1">2 Face</h4>

									<div className="border-bottom py-2">
										10Min/Upload
									</div>
									<div className="border-bottom py-2">
										4 Uploads
									</div>
									<div className="border-bottom py-2">
										0 PPM/Upload
									</div>
									<div className="border-bottom py-2">
										0 - 5 Min
									</div>
								</div>
								<div className="card-footer bg-transparent border-0">
									<button className="btn btn-light btn-block ">
										Upload
									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card rounded-lg shadow-sm text-center text-white  bg-dark card-info">
								<div className="card-body">
									<h4 className="h1">3 Face</h4>

									<div className="border-bottom py-2">
										10Min/Upload
									</div>
									<div className="border-bottom py-2">
										4 Uploads
									</div>
									<div className="border-bottom py-2">
										0 PPM/Upload
									</div>
									<div className="border-bottom py-2">
										0 - 5 Min
									</div>
								</div>
								<div className="card-footer bg-transparent border-0">
									<button className="btn btn-light btn-block ">
										Upload

									</button>
								</div>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="card rounded-lg shadow-lg text-center text-white  bg-dark card-info">
								<div className="card-body">
									<h4 className="h1">4 Face </h4>

									<div className="border-bottom py-2">
										10Min/Upload
									</div>
									<div className="border-bottom py-2">
										2 Uploads
									</div>
									<div className="border-bottom py-2">
										0 PPM/Upload
									</div>
									<div className="border-bottom py-2">
										0 - 5 Min
									</div>
								</div>
								<div className="card-footer bg-transparent border-0">
									<button className="btn btn-light btn-block ">
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<div className="row">
								<div className="col-12 mx-auto col-xl-4">
										Buffering ...
									<CProgress>
										<CProgressBar
											showValue
											animated
											striped
											value={counter * (1) + 3}
											color="primary"
											height="30px"
										/>
									</CProgress>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
