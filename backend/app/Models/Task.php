<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'name', 'type_task_id','value','expirated_at', 'cut_id' , 'matter_id'
    ];

    public function cut()
    {
        return $this->belongsTo('App\Models\Cut');
    }
}
