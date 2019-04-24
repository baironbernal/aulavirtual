<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\Http\Controllers\Controller;
use App\Models\Forum;
use Illuminate\Http\Request;

class ForumController extends Controller {


	public function __construct() {
        $this->middleware(['jwt.auth']);
    }

    private $validations = [
        'theme' => 'required|string',
        'description' => 'required|numeric',
    ];
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index() {
		//
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
	public static function store(Request $request, $task) {
		$validator = Validator::make($request->all(), $this->validations);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()->all()]);
        } else {
            $forum = Forum::create([
               'theme' => $required->theme,
        		'description' =>$required->description,
        		'task_id' => $task->id,
            ]);

            return $forum;
        }
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Forum  $forum
	 * @return \Illuminate\Http\Response
	 */
	public function show(Forum $forum) {
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Forum  $forum
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Forum $forum) {
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Forum  $forum
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Forum $forum) {
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Forum  $forum
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Forum $forum) {
		//
	}
}
