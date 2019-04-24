<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Task::class, function (Faker $faker) {

    $typetask  = \App\Models\TypeTask::get('id');
    $cuts  = \App\Models\Cut::get('id');
    $matters  = \App\Models\Matter::get('id');

    return [
        'name' => $faker->name,
        'type_tasks_id' => $faker->randomElement($typetask),
        'value' => rand(1,100),
        'expirated_at' => '2015-06-16',
        'cut_id' => $faker->randomElement($cuts),
        'matter_id' => $faker->randomElement($matters),

    ];
});
