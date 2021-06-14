import CIcon from '@coreui/icons-react'
import { CCardBody,CRow } from '@coreui/react'
import React from 'react'

export default function Dialogue() {
	return (
		<div className="card">
			<CCardBody>
				<h4 className="card-title">
					Dialogues 
				</h4>
				<CRow>
					<div className="col-lg-8">
						<div className="card bg-light " style={{minHeight: "220px"}}>
							
						</div>
						
						<div className="question h4 ">
							<span className="badge mr-3  badge-light">
								Q:
							</span>
							Why do want to go to Canada? Have you ever been to a South Sunny Country? 
						</div>

						<div className="answers mt-3">
							<ul className="list-group">
								<li className="list-group-item">
									<div class="custom-control custom-radio">
									<input type="radio" name="answer" class="custom-control-input" id="customCheck1" />
										<label class="custom-control-label" for="customCheck1">
											Answer 1 Will Be here Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.
										</label>
									</div>
								</li>
								<li className="list-group-item">
									<div class="custom-control custom-radio">
									<input type="radio" name="answer" class="custom-control-input" id="customCheck2" />
										<label class="custom-control-label" for="customCheck2">
											Answer 1 Will Be here lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.
										</label>
									</div>
								</li>
								<li className="list-group-item">
									<div class="custom-control custom-radio">
									<input type="radio" name="answer" class="custom-control-input" id="customCheck3" />
										<label class="custom-control-label" for="customCheck3">
											Answer 1 Will Be here Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.
										</label>
									</div>
								</li>
								<li className="list-group-item">
									<div class="custom-control custom-radio">
									<input type="radio" name="answer" class="custom-control-input" id="customCheck4" />
										<label class="custom-control-label" for="customCheck4">
											Answer 1 Will Be here Lorem ipsum dolor sit amet consectetur adipisicing elit. Non.sit amet consectetur adipisicing elit. Non.
										</label>
									</div>
								</li>
							</ul>
						</div>
						<div className="border btn-group justify-content-center  mt-4 mx-2 rounded-pill py-3 px-4 d-flex">
							<button className="btn disabled btn-outline-dark">
							&lt;&lt;	Previous Question
							</button>
							
							<button className="btn mx-2 px-5 btn-dark">
								Play Video 

 
							</button>

							<button className="btn btn-outline-dark">
								Next Question &gt;&gt; 
							</button>

						</div>
					</div>
					<div className="col-lg-4">
						<div className="card">
							<div className="card-header ">
								<h4 className="card-title mb-0">
									Toughness Level 
								</h4>
							</div>
							<div className="list-group list-group-horizontal w-100	">
								<div className="list-group-item">
									Beginner
								</div>
								<div className="active 	list-group-item">
								<CIcon size={'lg'} name={'cilCheckCircle'} />	Intermediate 
								</div>
								<div className="list-group-item">
									Professional  
								</div>
							</div>
						</div>
					</div>
				</CRow>
			</CCardBody>
		</div>
	)
}
