<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\Models\Career;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CareerController extends Controller {

	public function __construct() {
		$this->middleware(['jwt.auth']);
	}

	private $validations = [
		'name' => 'required|string',
		'semesters' => 'required|numeric|between:4,10',
	];

	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */

	public function index() {
		return response()->json(["careers" => Career::all()]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create() {
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request) {
		$validator = Validator::make($request->all(), $this->validations);

		if ($validator->fails()) {

			return response()->json(["errors" => $validator->errors()->all()]);
		} else {
			$career = Career::create([
				'name' => $request->name,
				'code'=> rand(100000, 900000),
				'semesters' => $request->semesters,
			]);

			return response()->json(["message" => 'Carrera creada']);

		}
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Career  $career
	 * @return \Illuminate\Http\Response
	 */
	public function show(Career $career) {
		$career_obj = Career::findOrFail($career);

		return response()->json(["career" => $career_obj]);
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Career  $career
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Career $career) {
		$career_obj = Career::findOrFail($career->id);

		return response()->json(["career" => $career_obj]);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Career  $career
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Career $career) {
		$this->validations['name'] = 'string';
		$this->validations['semesters'] = 'numeric|between:4,10';

		if (isset($request->status)) {
			$this->validations['status'] = 'numeric|max:1|between:0,1';
		}

		$validator = Validator::make($request->all(), $this->validations);

		if ($validator->fails()) {
			return response()->json(["errors" => $validator->errors()->all()]);
		}
		else {
			$career_obj = Career::findOrFail($career->id);
			$career_obj->update($request->all());

			return response()->json(["message" => 'Carrera actualizada']);

		}

	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Career  $career
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Career $career) {
		$career_obj = Career::find($career->id);
		$career_obj->delete();
		$career_obj->matters()->detach();

		return response()->json(["message" => 'Carrera eliminada']);

	}
}
