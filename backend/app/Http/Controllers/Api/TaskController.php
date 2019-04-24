<?php

namespace App\Http\Controllers\Api;

use App\Models\Cut;
use App\Models\Task;
use App\Models\Matter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ForumController;

class TaskController extends Controller
{
    public function __construct() {
        $this->middleware(['jwt.auth']);
        
    }

    private $matter = Matter::where('user_id', auth()->user())->first();

    private $validations = [
        'name' => 'required|string',
        'type_task_id' => 'required|numeric',
        'value' => 'required|numeric|between:1,100',
        'expired_at' => 'required|date',
        'cut_id' => 'required|numeric',
        'matter_id' => 'required|numeric'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::where(['matter_id', $this->matter->id])->get();

        return response()->json(["tasks" => $tasks]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexByCut($cut_id)
    {
        $tasks = Task::where([
            'matter_id', $this->matter->id,
            'cut_id', $cut_id
        ])->get();

        return response()->json(["tasks" => $tasks]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json(["cuts" => Cut::all()]);
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
            $valuesTask = Task::select('value')
                    ->where('matter_id', $this->matter->id)
                    ->sum('values')
                    ->get();

            if (! is_null($valuesTask && $valuesTask != 100)) {
                $less = $valuesTask - 100;
                if ($request->value > $less) {
                    return response()->json(["errors" => "Valor no cumple con el promedio de las anteriores notas"]);
                }
            }
            $task = Task::create([
                'name' => $request->name,
                'type_task_id' => $request->type_task_id,
                'value' => $request->value,
                'expired_at' => $request->expired_at,
                'cut_id' => $request->cut_id,
                'matter_id' => $request->matter_id,
            ]);

            $findTypeTask = TypeTask::where('name', 'foro')->first();
            if ($type_task_id == $findTypeTask->id) {
                $forum = ForumController::store($request, $task);
            }

            return response()->json(["message" => 'Carrera creada']);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    {
        //
    }
}
