<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\ExcelController;

class UserController extends Controller
{
    public function uploadExcelUsers() {
    	ExcelController::uploadUsers();
    }
}
