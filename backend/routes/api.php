<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



/*Routes create for auth users with JWT*/

Route::group(['prefix' => 'auth'], function() {
    Route::group(['middleware' => ['role:admin']], function () {
        Route::post('upload-user', 'Api\UserController@uploadExcelUsers')->name('user.excelstore');
        Route::post('career', 'Api\CareerController@store')->name('career.store');
        Route::get('career/create', 'Api\CareerController@create')->name('career.create');
        Route::put('career/{career}', 'Api\CareerController@update')->name('career.update');
        Route::delete('career/{career}', 'Api\CareerController@destroy')->name('career.destroy');
        Route::get('career/{career}/edit', 'Api\CareerController@edit')->name('career.edit');


        
        Route::get('matter/create', 'Api\MatterController@create')->name('matter.create');
        Route::post('matter', 'Api\MatterController@store')->name('matter.store');
        Route::put('matter/{matter}', 'Api\MatterController@update')->name('matter.update');
        Route::delete('matter/{matter}', 'Api\MatterController@destroy')->name('matter.destroy');
        Route::get('matter/{matter}/edit', 'Api\MatterController@edit')->name('matter.edit');
        /*Type Task*/ Route::resource('type-task', 'Api\TypeTaskController');

    });
    
    Route::group(['middleware' => ['role:admin|teacher|student']], function () {
        Route::get('career', 'Api\CareerController@index')->name('career.index');
        Route::get('career/{career}', 'Api\CareerController@show')->name('career.show');
        Route::get('matter', 'Api\MatterController@index')->name('matter.index');
        Route::get('matter/{matter}', 'Api\MatterController@show')->name('matter.show');
    });

    Route::group(['middleware' => ['role:teacher']], function () {
        Route::get('task/cut/{cut}', 'Api\TaskController@indexByCut')->name('task.index.cut');
        Route::post('task', 'Api\TaskController@store')->name('task.store');
        Route::get('task/teacher/{matter}', 'Api\TaskController@showTeacher')->name('task.show.matter');
        Route::get('task/create', 'Api\TaskController@create')->name('task.create');
        Route::put('task/{task}', 'Api\TaskController@update')->name('task.update');
        Route::delete('task/{task}', 'Api\TaskController@destroy')->name('task.destroy');
        Route::get('task/{task}/edit', 'Api\TaskController@edit')->name('task.edit');
    });

    Route::group(['middleware' => ['role:admin|student']], function () {
        Route::get('task', 'Api\TaskController@index')->name('task.index');
        Route::get('task/{task}', 'Api\TaskController@show')->name('task.show');
    });

    Route::post('login', 'Api\AuthController@login');
    
    /*Cut*/ Route::resource('cut', 'Api\CutController');
    /*Task*/ Route::resource('task', 'Api\TaskController');
    /*StudyMaterial*/ Route::resource('study-material', 'Api\StudyMaterialController');
    /*Forum*/ Route::resource('forum', 'Api\ForumController');
    /*Opinion*/ Route::resource('opinion', 'Api\OpinionController');
    /*Rating*/ Route::resource('rating', 'Api\RatingController');
    /*Work*/ Route::resource('work', 'Api\WorkController');

    Route::post('logout', 'Api\AuthController@logout');
    Route::post('refresh', 'Api\AuthController@refresh');
    Route::get('me', 'Api\AuthController@me');   
    		
});

