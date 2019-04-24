<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cut extends Model
{
    protected $fillable = [
        
    ];

    public function tasks()
    {
        return $this->hasMany('App\Models\Task');
    }
}
