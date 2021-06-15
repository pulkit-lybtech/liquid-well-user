import React from 'react'

export default function DSelector() {

	// const [dialogue, setDialogue] = React.useState([]);
	const dialogue = [
		{
			id: 1,
			name: "Set of 1 Dialogue",
			que_no: "3 Questionnaire",
			price: "Free",
			person: 1,
			link: ""
		},
		{
			id: 1,
			name: "Set of 3 Dialogue",
			que_no: "10 x 3 Random Questionnaires",
			price: "Paid",
			person: 1,
			link: ""
		},
		{
			id: 1,
			name: "Set of 5 Dialogue",
			que_no: "10 x 5 Random Questionnaires",
			price: "Paid",
			person: 1,
			link: ""
		},
		{
			id: 1,
			name: "For every Extra Set ",
			que_no: "16 Random Questionnaires",
			price: "Paid",
			person: 1,
			link: ""
		},
	]
	return (
		<div className="bg-light "	>
			<div className="card card-body">
				<div className="row">
					<div className="col-12"><h1 className="text-dark h2 mb-4">Dialogue Selector </h1></div>

					{/* form here  */}
					<div className="col-md-4 col-lg-3">
						<div className="input-group">

							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">Category</span>
							</div>
							<select name="" id="" className="custom-select">
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
							</select>
						</div>
					</div>
					<div className="col-md-4 col-lg-3">

						<div className="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">Sub Category</span>
							</div>
							<select name="" id="" className="custom-select">
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
								<option value="">
									product cat
								</option>
							</select>
						</div>
					</div>


					<div className="col-md-4 col-lg-3">

						<div className="input-group">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">Country </span>
							</div>
							<select name="" id="" className="custom-select">
								<option value="">
									India
								</option>
								<option value="">
									Canada
								</option>
								<option value="">
									Xanada
								</option>
								<option value="">
									Columbia
								</option>
								<option value="">
									France
								</option>
							</select>
						</div>
					</div>
					<div className="col-auto">
						<button className="btn px-4 btn-primary">
							Search 
						</button>
					</div>
				</div>
			</div>
		
			<div className="dialogue">
				<div className="row">
					{dialogue.map((item, idx) => {
						return (
						<div className="col-lg-3 col-xl-3" key="item.name">
							<div className="card text-center shadow rounded-lg  ">
								<div className="card-header border-bottom-0 mt-2">
									<h5> <strong>{item.name}</strong></h5>	
								</div>
								<div className="card-body py-0">
								<ul className="list-group  border-top-0 border-bottom-0 list-group-flush">
									<li className="list-group-item">
										<strong>{item.price}</strong>
									</li>
									<li className="list-group-item">
										<strong>{item.que_no}</strong>
									</li>
									<li className="list-group-item">
										<strong>{item.person} Person </strong>
									</li>
								</ul>
								</div>
								<div className="card-footer border-0">
									{ (idx === 0) ?  <button className="btn btn-success btn-block"> Try </button> : <button className="btn btn-primary btn-block"> Buy </button> }
								</div>
							</div>
						</div>
						)
					})}
					
				</div>
			</div>
		</div>
	)
}
