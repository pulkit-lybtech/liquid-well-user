import React from 'react'

export default function EditProfile() {
	return (
		<div className="row">
			<div className="col-xl-6 col-lg-8">
			<div className="card ">
				<div className="card-body ">
					<h2>Edit Profile </h2>
					<div class="form-group row">
						<label for="inputEmail3" class="col-sm-3 col-form-label">Name</label>
						<div class="col-sm-9">
							<input type="email" class="form-control" id="inputEmail3" />
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 col-form-label">Email</label>
						<div class="col-sm-9">
							<input type="password" class="form-control" id="inputPassword3" />
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 col-form-label">Phone</label>
						<div class="col-sm-9">
							<input type="password" class="form-control" id="inputPassword3" />
						</div>
					</div>
					<div className="form-group">
						<button className="btn btn-primary px-4 ">
							Update Profile 
						</button>
						<button className="btn ml-2 btn-outline-danger px-4 ">
							Reset 
						</button>
					</div>
				</div>
			</div>	
			</div>
		</div>

	)
}
