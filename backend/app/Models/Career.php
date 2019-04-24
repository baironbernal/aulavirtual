<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = [
        'name' ,'code' , 'semesters', 'status',
    ];

    public function matters()
    {
        return $this->belongsToMany('App\Models\Matter');
    }
}
