<?php

use App\Models\TypeTask;
use Illuminate\Database\Seeder;

class TypeTaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TypeTask::create(['name' => 'Collage']);
        TypeTask::create(['name' => 'Textos argumentativos']);
        TypeTask::create(['name' => 'PDF']);
        TypeTask::create(['name' => 'Autoevaluacion']);
        TypeTask::create(['name' => 'Evaluacion']);
        TypeTask::create(['name' => 'Taller']);
        TypeTask::create(['name' => 'Foro']);
    }
}
