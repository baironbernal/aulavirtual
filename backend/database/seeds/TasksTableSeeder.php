<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Models\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(AppTask::class, 20)->create();
    }
}
