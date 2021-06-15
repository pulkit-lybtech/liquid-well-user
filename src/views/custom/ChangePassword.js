import React from 'react'

export default function ChangePassword() {
	return (
		<div className="row">
			<div className="col-xl-6 col-lg-8">
			<div className="card ">
				<div className="card-body ">
					<h2>Change Profile Password </h2>
					<div class="form-group row">
						<label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
						<div class="col-sm-9">
							<input type="email" class="form-control" id="inputEmail3" />
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
						<div class="col-sm-9">
							<input type="password" class="form-control" id="inputPassword3" />
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 col-form-label">Repeat Password</label>
						<div class="col-sm-9">
							<input type="password" class="form-control" id="inputPassword3" />
						</div>
					</div>
					<div className="form-group">
						<button className="btn btn-primary px-4 ">
							Save Password 
						</button>
					</div>
				</div>
			</div>	
			</div>
		</div>

	)
}
