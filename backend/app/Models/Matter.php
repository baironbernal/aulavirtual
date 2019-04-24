<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Matter extends Model
{
    protected $fillable = [
        'name', 'user_id', 'status'
    ];

    public function careers()
    {
        return $this->belongsToMany('App\Models\Career');
    }
    
    public function user()
    {
    	return $this->belongsTo('App\User');
    }
}
