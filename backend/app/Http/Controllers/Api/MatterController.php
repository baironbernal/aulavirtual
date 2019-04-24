<?php

namespace App\Http\Controllers\Api;

use Validator;
use App\User;
use App\Models\Matter;
use App\Models\Career;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MatterController extends Controller
{

    public function __construct() {
        $this->middleware(['jwt.auth']);
    }

    private $validations = [
        'name' => 'required|string',
        'user_id' => 'required|numeric',
        'career_id' => 'required|numeric',
    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        return response()->json(["matters" => Matter::with('careers','user')->get()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        $careers = Career::all();
        $users = User::with('roles')->get();
        $teachers = [];

        foreach ($users as $user) {
            if ($user->hasRole('teacher')) {
                array_push($teachers, $user);
            }
        }
        return response()->json([
            "careers" =>  $careers,
            "teachers" =>  $teachers
        ]);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), $this->validations);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()->all()]);
        } else {
            $matter = Matter::create([
                'name' => $request->name,
                'user_id' => $request->user_id,
            ]);
            $matter->careers()->attach($request->career_id);
            return response()->json(["message" => 'Materia creada']);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function show(Matter $matter)
    {
        $matter_obj = Matter::findOrFail($matter);

        return response()->json(["matter" => $matter_obj]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function edit(Matter $matter)
    {
        $matter_obj = Matter::findOrFail($matter);
        $careers = Career::all();

        return response()->json(["matter" => $matter_obj, "careers" => $careers]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Matter $matter)
    {
        $this->validations['name'] = 'string';
        $this->validations['user_id'] = 'numeric';
        $this->validations['career_id'] = 'numeric';

        if (isset($request->status)) {
            $this->validations['status'] = 'numeric|max:1|between:0,1';
        }

        $validator = Validator::make($request->all(), $this->validations);

        if ($validator->fails()) {
            return response()->json(["errors" => $validator->errors()->all()]);
        }
        else {
            $matter_obj = Matter::findOrFail($matter->id);
            $matter_obj->update($request->all());

            return response()->json(["message" => 'Materia actualizada']);

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Matter  $matter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Matter $matter)
    {

        $matter_obj = Matter::find($matter->id);
        $matter_obj->careers()->detach();
        $matter_obj->delete();
        

        return response()->json(["message" => 'Materia eliminada']);
    }
}
